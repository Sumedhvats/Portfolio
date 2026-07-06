"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sumedh Vats",
      jobTitle: "Backend & Infrastructure Engineer",
      description:
        "Backend and infra first engineer writing Go and Node. I care about latency, correctness, and systems that scale without drama. I also write CLIs.",
      url: "https://sumedh.app",
      email: "sumedhvats2004@gmail.com",
      nationality: "Indian",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressRegion: "Punjab",
        addressLocality: "Mohali",
      },
      sameAs: [
        "https://linkedin.com/in/sumedhvats",
        "https://github.com/sumedhvats",
        "https://dev.to/sumedhvats",
      ],
      knowsAbout: [
        "Backend Development",
        "Infrastructure Engineering",
        "Go",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "CLI Tools",
        "Rate Limiting",
        "Distributed Systems",
        "Web Development",
        "Software Engineering",
        "Open Source",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Chandigarh University",
          description: "B.E. in Computer Science Engineering",
        },
        {
          "@type": "EducationalOrganization",
          name: "Vikas Bharati Public School",
          description: "Higher Secondary",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Backend & Infrastructure Engineer",
        description: "Building performant, reliable backend systems and infrastructure",
        skills: [
          "Go",
          "Node.js",
          "TypeScript",
          "JavaScript",
          "Java",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "AWS",
          "Gin",
          "Express.js",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
