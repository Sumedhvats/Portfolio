"use client"

import { useEffect } from "react"

export function NekoCat() {
  useEffect(() => {
    if (typeof window === "undefined") return

    let container: HTMLDivElement | null = null
    let rafId: number | null = null

    const pos = { x: 0, y: 0 }
    const mousePos = { x: 0, y: 0 }
    const easing = 0.08

    const createNeko = () => {
      const id = "neko-cat"
      if (document.getElementById(id)) return

      container = document.createElement("div")
      container.id = id
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9998;
        will-change: transform;
        transform: translate3d(0, 0, 0);
        image-rendering: auto;
      `

      const img = document.createElement("img")
      img.src = "/profile.webp"
      img.alt = "Profile"
      img.style.cssText = `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        display: block;
        background: transparent;
      `

      container.appendChild(img)
      document.body.appendChild(container)
    }

    const destroyNeko = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      if (container) {
        container.remove()
        container = null
      }
    }

    const animate = () => {
      if (!container) return

      pos.x += (mousePos.x - pos.x) * easing
      pos.y += (mousePos.y - pos.y) * easing

      container.style.transform = `translate3d(${Math.round(pos.x)}px, ${Math.round(pos.y)}px, 0)`

      rafId = requestAnimationFrame(animate)
    }

    const getZoom = () => {
      const z = parseFloat(getComputedStyle(document.body).zoom || "1")
      return Number.isFinite(z) && z > 0 ? z : 1
    }

    const onMouseMove = (e: MouseEvent) => {
      const z = getZoom()
      mousePos.x = e.clientX / z - 20
      mousePos.y = e.clientY / z + 8
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const z = getZoom()
        mousePos.x = e.touches[0].clientX / z - 20
        mousePos.y = e.touches[0].clientY / z + 8
      }
    }

    const startNeko = () => {
      createNeko()
      window.addEventListener("mousemove", onMouseMove, { passive: true })
      window.addEventListener("touchmove", onTouchMove, { passive: true })
      animate()
    }

    const stopNeko = () => {
      destroyNeko()
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("touchmove", onTouchMove)
    }

    startNeko()

    return () => {
      stopNeko()
    }
  }, [])

  return null
}
