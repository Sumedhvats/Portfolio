import Link from "next/link";
import { Github, Linkedin, Mail, Calendar, ChevronDown, BookOpen, ExternalLink } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Typewriter } from "@/components/ui/typewriter";
import { TimeCounter } from "@/components/time-counter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementCard, AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";
import { ContactForm } from "@/components/contact-form";
import {
  FadeInText,
  SlideUp,
  SlideInLeft,
  SlideInRight,
} from "@/components/scroll-animation";
import { CalEmbedButton } from "@/components/cal-embed-button";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-20 sm:pb-24 md:pb-32 pt-4 sm:pt-5 md:pt-6 dark:bg-neutral-950">
      <FadeInText>
        <nav className="mx-auto mb-3 sm:mb-4 flex w-full max-w-xl items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
          <Link
            href="#"
            className="font-semibold text-neutral-900 dark:text-neutral-50 text-sm sm:text-base"
          >
            sumedh.
          </Link>


          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="#projects"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              projects
            </a>
            <a
              href="#open-source"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              open source
            </a>
            <a
              href="#achievements"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
            >
              achievements
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </FadeInText>

      <div className="mx-auto max-w-xl px-3 sm:px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-xl sm:rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-3 sm:p-4 md:p-6 lg:p-6">
            {/* Header */}

            <SlideUp>
              <header id="about" className="space-y-2 p-2 sm:p-3 md:p-4">
                <FadeInText delay={0.1}>
                  <div className="flex items-center justify-between gap-2">
                    <TextShimmer
                      as="p"
                      className="text-xs"
                      duration={2.2}
                      spread={1.2}
                    >
                      Hey ! I'm
                    </TextShimmer>
                    <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
                  </div>
                </FadeInText>
                <SlideInLeft delay={0.2}>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden flex-shrink-0 transform-gpu isolate">
                      <img
                        src="/profile.png"
                        alt="Sumedh Vats"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h1 className="text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                      Sumedh Vats
                    </h1>

                  </div>
                </SlideInLeft>
                <FadeInText delay={0.3}>
                  <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                    <span>20, he/him </span>
                    <span className="hidden sm:inline">{"|"}</span>
                    <span className="max-w-[38ch]">
                      <Typewriter
                        text={[
                          "Backend Engineer",
                          "Go Developer",
                          "Infra Builder",
                        ]}
                        speed={90}
                        waitTime={2000}
                        deleteSpeed={80}
                        className="text-neutral-600 dark:text-neutral-300"
                        cursorChar="|"
                        showCursor={true}
                      />
                      {" from India."}
                    </span>

                  </div>

                </FadeInText>
                <SlideInRight delay={0.4}>
                  <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <a
                      href="https://drive.google.com/file/d/1JT84lJgD7ajBUmqAXlf5koBr8o3xJ4Lb/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View Resume"
                      className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 whitespace-nowrap"
                    >
                      Resume
                    </a>
                    <a
                      href="mailto:sumedhvats2004@gmail.com"
                      aria-label="Send email"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                    </a>
                    <a
                      href="https://github.com/sumedhvats"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open GitHub"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                    </a>
                    <a
                      href="https://linkedin.com/in/sumedhvats"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open LinkedIn"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                    </a>
                    <a
                      href="https://dev.to/sumedhvats"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Blog"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                    >
                      <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </a>
                    <CalEmbedButton />
                  </div>
                </SlideInRight>
              </header>



            </SlideUp>

            {/* Bio */}
            <FadeInText delay={0.7}>
              <section className="mt-3 sm:mt-4 mx-1 sm:mx-2 md:m-2 justify-center items-center text-xs sm:text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                <p>
                  backend and infra first engineer writing Go and Node. i care about latency, correctness, and systems that scale without drama. i also write CLIs :)
                </p>
              </section>
            </FadeInText>

            {/* Projects */}
            <SlideUp delay={0.2}>
              <section id="projects" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1">
                    Projects
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="pasteCTL"
                      image="pastectl.png"
                      links={[
                        {
                          label: "paste.svats.me ↗",
                          href: "https://paste.svats.me",
                        },
                        {
                          label: "github ↗",
                          href: "https://github.com/sumedhvats/pastectl",
                        },
                        {
                          label: "blog ↗",
                          href: "https://dev.to/sumedhvats",
                        },
                      ]}
                      bullets={[
                        "Full-stack code sharing platform with monorepo architecture supporting real-time collaborative editing via WebSocket, achieving 56% test coverage with comprehensive integration testing.",
                        "RESTful API server in Go using Gin framework with PostgreSQL for data persistence, implementing efficient CRUD operations and real-time update propagation across concurrent sessions.",
                        "Deployed scalable infrastructure on AWS with backend on EC2 (t3.micro) and frontend on Vercel, configuring CI/CD pipelines for automated deployments with zero-downtime releases.",
                        "Companion CLI tool in Go with Cobra framework for terminal-based paste management and automation, implementing syntax highlighting for 10+ languages with configurable expiration and raw API endpoints.",
                      ]}
                      tags={["Go", "Gin", "Next.js", "TypeScript", "PostgreSQL", "WebSocket"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="rate-limiter-go"
                      links={[
                        {
                          label: "github ↗",
                          href: "https://github.com/sumedhvats/rate-limiter-go",
                        },
                        {
                          label: "blog ↗",
                          href: "https://dev.to/sumedhvats",
                        },
                      ]}
                      bullets={[
                        "Production-ready rate limiting library achieving ~15M operations/second on single-core benchmarks, with 60-70ns/op latency under concurrent workloads and 93% test coverage across all modules.",
                        "Implemented 3 algorithms (Token Bucket, Sliding Window Counter, Leaky Bucket) with pluggable storage backends supporting both in-memory and distributed Redis architectures.",
                        "Designed atomic Redis operations using Lua scripts to ensure consistency under high concurrency, eliminating race conditions in distributed systems with even 100+ concurrent servers.",
                      ]}
                      tags={["Go", "Redis", "Lua", "Docker"]}
                    />
                  </SlideInLeft>

                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Brainly"
                      image="secondbrain.png"
                      links={[
                        {
                          label: "github ↗",
                          href: "https://github.com/sumedhvats/brainly",
                        },
                      ]}
                      bullets={[
                        "Collaborative note-taking platform supporting content creation, organization, and embedding of social media content (YouTube, Twitter, Reddit) with real-time synchronization capabilities.",
                        "RESTful backend with Node.js and Express.js following MVC design pattern, implementing efficient MongoDB queries for content retrieval and user data management.",
                        "JWT-based authentication system with secure token generation and validation, ensuring role-based access control for shared workspaces.",
                      ]}
                      tags={["Node.js", "React.js", "TypeScript", "Tailwind CSS", "MongoDB"]}
                    />
                  </SlideInLeft>

                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-2 sm:mt-3 flex justify-center">
                    <a
                      href="https://github.com/sumedhvats?tab=repositories" target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all projects →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            {/* Open Source Contributions */}
            <SlideUp delay={0.2}>
              <section id="open-source" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1">
                    Open Source
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="distribution/distribution (CNCF)"
                      links={[
                        {
                          label: "PR #4721 ↗",
                          href: "https://github.com/distribution/distribution/pull/4721",
                        },
                        {
                          label: "repo ↗",
                          href: "https://github.com/distribution/distribution",
                        },
                      ]}
                      bullets={[
                        "Fixed log formatting bug in the proxy registry; addressed security review feedback from a core maintainer by implementing URL sanitization via Redacted() to prevent credential leakage in logs. PR #4721 merged into main.",
                      ]}
                      tags={["Go", "CNCF", "Docker Registry"]}
                    />
                  </SlideInLeft>
                </div>
              </section>
            </SlideUp>

            {/* Skills */}
            <SlideUp delay={0.3}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-4 section-divider pt-4 sm:pt-5">
                <SkillsDraggable />
              </section>
            </SlideUp>

            <SlideUp delay={0.3}>
              <section id="achievements" className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-3 sm:pt-4 md:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage mb-3 sm:mb-4 text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-100 ml-0.5 sm:ml-1 md:ml-1">
                    Achievements
                  </h3>
                </FadeInText>

                <div className="grid gap-2 sm:gap-2.5 md:gap-3">
                  <SlideInLeft delay={0.1}>
                    <AchievementCard
                      title="800+ DSA Problems Solved"
                      description="Solved 800+ algorithmic and data structure problems across LeetCode, GeeksforGeeks, and Codeforces, with strong focus on dynamic programming, graphs, greedy algorithms, and problem-solving under constraints."
                    />
                  </SlideInLeft>

                  <SlideInRight delay={0.15}>
                    <AchievementCard
                      title="LeetCode Contest Rating — 1,622"
                      description="Achieved a peak LeetCode contest rating of 1,622, placing in the top tier of competitive programmers globally."
                    />
                  </SlideInRight>
                </div>

                <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                  <SlideInLeft delay={0.2}>
                    <a
                      href="https://leetcode.com/u/sumedhvats2004/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-1.5 text-[10px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                      </svg>
                      LeetCode Profile
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  </SlideInLeft>
                  <SlideInRight delay={0.25}>
                    <a
                      href="https://codolio.com/profile/SumedhVats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-3 py-1.5 text-[10px] sm:text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                      </svg>
                      Codolio Profile
                      <ExternalLink className="h-3 w-3 opacity-50" />
                    </a>
                  </SlideInRight>
                </div>
              </section>
            </SlideUp>

            {/* Blogs */}
            <SlideUp delay={0.2}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3 ml-0.5 sm:ml-1 md:ml-1">
                    Blogs
                  </h3>
                </FadeInText>
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <ProjectListItem
                      title="Building pasteCTL — a real-time code sharing platform"
                      image="blog.png"
                      headerLayout="vertical"
                      links={[
                        {
                          label: "2025",
                          href: "https://dev.to/sumedhvats",
                        },
                        {
                          label: "Read ↗",
                          href: "https://dev.to/sumedhvats",
                        },
                        {
                          label: "dev.to ↗",
                          href: "https://dev.to/sumedhvats",
                        },
                      ]}
                      bullets={[]}
                      tags={[]}
                    />
                  </SlideInLeft>
                </div>
                <FadeInText delay={0.2}>
                  <div className="mt-2 sm:mt-3 flex justify-center">
                    <a
                      href="https://dev.to/sumedhvats"
                      target="_blank"
                      className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    >
                      View all Blogs →
                    </a>
                  </div>
                </FadeInText>
              </section>
            </SlideUp>

            {/* Education */}
            <SlideUp delay={0.3}>
              <section className="mt-3 sm:mt-4 p-2 sm:p-3 md:p-3 section-divider pt-4 sm:pt-5">
                <FadeInText delay={0.1}>
                  <h3 className="font-bricolage text-xs sm:text-sm md:text-base font-semibold tracking-[0.05em] text-neutral-900 dark:text-neutral-50 mb-2 sm:mb-3">
                    Education
                  </h3>
                </FadeInText>
                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2">
                  <SlideInLeft delay={0.1}>
                    <li>
                      <AchievementItem
                        title="Chandigarh University"
                        date="2023 – Present"
                        description="B.E. in Computer Science Engineering — CGPA: 8.56 | Mohali, India"
                      />
                    </li>
                  </SlideInLeft>
                  <SlideInRight delay={0.15}>
                    <li>
                      <AchievementItem
                        title="Vikas Bharati Public School"
                        date="2022"
                        description="Higher Secondary — 82% | Delhi, India"
                      />
                    </li>
                  </SlideInRight>
                </ul>
              </section>
            </SlideUp>

            {/* Contact */}
            <SlideUp delay={0.3}>
              <section
                id="book-a-meet"
                className="mt-4 rounded-xl  border-neutral-200 bg-neutral-50/70 p-5 text-left dark:border-neutral-800 dark:bg-neutral-900/30"
              >
                <FadeInText delay={0.1}>
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                    Still reading? That means something clicked. <br />Let's talk.
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">

                  </p>
                </FadeInText>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="https://cal.com/sumedhvats"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-300 px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-200"
                    aria-label="Book a meeting on Cal.com"
                  >
                    <Calendar className="h-4 w-4" />
                    book a meet
                  </a>
                  <a
                    href="mailto:sumedhvats2004@gmail.com"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                    aria-label="Send an email"
                  >
                    <Mail className="h-4 w-4" />
                    send an email
                  </a>
                  <a
                    href="https://linkedin.com/in/sumedhvats"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    aria-label="Connect on LinkedIn"
                  >
                    connect on linkedin
                  </a>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    or drop a message
                  </p>
                  <ContactForm />
                  <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                    Messages are directed to{" "}
                    <span className="font-medium">sumedhvats2004@gmail.com</span>.
                  </p>
                </div>
              </section>
            </SlideUp>
          </div>
        </article>
        <div className="mt-6 sm:mt-8 flex justify-center rounded-lg sm:rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 text-xs sm:text-xs text-neutral-500 dark:text-neutral-400 p-2 sm:p-2 md:p-3 mx-0">

          <span className="italic text-center leading-5 sm:leading-6">The people who are crazy enough to think they can change the world are <br /> the ones who do</span> <span aria-hidden> </span>

        </div>{" "}
        <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center text-xs text-neutral-500 dark:text-neutral-400 px-2">

          designed and developed by&nbsp;<a href="https://github.com/sumedhvats" className="text-blue-400 hover:text-blue-500">~Sumedh</a>
        </div>

      </div>

      {/* Floating Dock */}

      <Dock />
    </main>
  );
}
