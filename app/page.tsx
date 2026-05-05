"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowUpRight, Download, Linkedin, Mail } from "lucide-react";

const profile = {
  name: "Dhrumil Patel",
  line: "SDE · AI Systems · Technical Delivery",
  location: "San Francisco Bay Area",
  image: "/profile.jpg",
  email: "dhrumilpatel358@gmail.com",
  linkedin: "https://www.linkedin.com/in/dhrumil-patel-408297190/",
  resume: "/resume.pdf"
};

const works = [
  ["01", "SDE", "Clean software systems built for scale and reliability.", "Python · APIs · Linux"],
  ["02", "AI Systems", "Production-ready ML and LLM workflows.", "LLMs · MLflow · RAG"],
  ["03", "Technical Delivery", "Turning requirements into plans, milestones, and shipped outcomes.", "Planning · Docs · Stakeholders"],
  ["04", "Data Products", "ETL, analytics, model evaluation, and decision support.", "Pandas · Airflow · Spark"]
];

const experience = [
  ["Quanta Computer Inc.", "Software Engineer", "2026 — Present"],
  ["CSU East Bay", "Machine Learning Developer", "2024 — 2025"],
  ["UL Solutions", "Wireless Technical Intern", "2024 — 2024"],
  ["BISAG", "Machine Learning Engineer", "2020 — 2022"],
  ["VMukti Solutions", "Software Engineer", "2019 — 2020"]
];

const services = [
  "Software Development Engineer",
  "AI / ML Systems",
  "Technical Project Coordination",
  "Cloud Programs",
  "Data Engineering",
  "Stakeholder Communication"
];

export default function PortfolioPage() {
  const [active, setActive] = useState(0);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(360px circle at ${smoothX}px ${smoothY}px, rgba(0,0,0,0.08), transparent 45%)`;

  useEffect(() => {
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#171717] selection:bg-black selection:text-white">
      <motion.div className="pointer-events-none fixed inset-0 z-10" style={{ background: spotlight }} />

      <motion.div
        className="pointer-events-none fixed z-50 hidden h-7 w-7 rounded-full border border-black/30 bg-white/20 backdrop-blur-md md:block"
        style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
      />

      <header className="fixed left-0 right-0 top-0 z-40 px-5 py-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-black/10 pb-5">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.22em]">
            Dhrumil Patel
          </a>

          <div className="hidden gap-8 text-sm text-black/60 md:flex">
            {["Work", "About", "Experience", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black">
                {item}
              </a>
            ))}
          </div>

          <a href={profile.resume} className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium hover:bg-black hover:text-white">
            Resume
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-5 pb-10 pt-28 lg:grid-cols-[1fr_0.76fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-black/10 bg-white/35 px-4 py-2 text-sm uppercase tracking-[0.22em] text-black/60 backdrop-blur">
              {profile.line}
            </span>
            <span className="rounded-full border border-black/10 bg-white/35 px-4 py-2 text-sm font-medium text-black backdrop-blur">
              {profile.location}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="max-w-5xl text-[clamp(4.7rem,13vw,13rem)] font-medium leading-[0.78] tracking-[-0.09em]">
            Building useful systems.
          </motion.h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.16 }} className="grid gap-5">
          <div className="overflow-hidden rounded-[2rem] bg-black/5 p-2">
            <img src={profile.image} alt={profile.name} className="h-[520px] w-full rounded-[1.55rem] object-cover object-center" />
          </div>

          <div className="grid grid-cols-[1fr_auto] items-end gap-5">
            <p className="text-xl leading-8 tracking-[-0.03em] text-black/65">
              Software engineer with AI depth and management-ready execution across SDE work, planning, cloud programs, and delivery.
            </p>
            <a href="#work" className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition hover:scale-105" aria-label="View work">
              <ArrowUpRight />
            </a>
          </div>
        </motion.div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-28">
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
          <p className="text-sm uppercase tracking-[0.22em] text-black/55">Selected work</p>
          <p className="text-sm text-black/50">SDE · AI · Delivery</p>
        </div>

        <div className="grid gap-4">
          {works.map((work, index) => (
            <motion.div
              key={work[1]}
              onMouseEnter={() => setActive(index)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className={`group grid cursor-default gap-5 border-b border-black/10 py-8 transition md:grid-cols-[0.2fr_0.9fr_1.1fr_0.55fr] md:items-center ${active === index ? "opacity-100" : "opacity-80"}`}
            >
              <p className="text-black/40">{work[0]}</p>
              <h2 className="text-4xl font-medium tracking-[-0.06em] md:text-6xl">{work[1]}</h2>
              <p className="max-w-xl text-lg leading-7 text-black/60">{work[2]}</p>
              <p className="text-sm text-black/45 md:text-right">{work[3]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-5 py-28 md:grid-cols-[0.7fr_1.3fr]">
        <p className="text-sm uppercase tracking-[0.22em] text-black/55">About</p>
        <h2 className="text-4xl font-medium leading-[1.05] tracking-[-0.06em] md:text-7xl">
          I connect SDE work, AI systems, and technical execution — so ideas become reliable products.
        </h2>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-px overflow-hidden rounded-[2rem] bg-black/10 md:grid-cols-3">
          {services.map((item) => (
            <div key={item} className="bg-[#f4f1ea] p-7 text-2xl font-medium tracking-[-0.04em] transition hover:bg-white">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-28">
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
          <p className="text-sm uppercase tracking-[0.22em] text-black/55">Experience</p>
          <p className="text-sm text-black/50">Technical + management trajectory</p>
        </div>

        {experience.map(([company, role, date]) => (
          <div key={company} className="grid gap-3 border-b border-black/10 py-6 md:grid-cols-[1fr_1fr_auto] md:items-center">
            <h3 className="text-2xl font-medium tracking-[-0.04em]">{company}</h3>
            <p className="text-black/60">{role}</p>
            <p className="text-black/45">{date}</p>
          </div>
        ))}
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 pb-10 pt-28">
        <div className="rounded-[2.5rem] bg-[#171717] p-8 text-[#f4f1ea] md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.07em] md:text-8xl">
              Open to building what’s next.
            </h2>

            <div>
              <p className="mb-8 text-lg leading-8 text-white/60">
                SDE, AI systems, technical project coordination, solutions engineering, and delivery-focused roles.
              </p>

              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-[#f4f1ea] px-5 py-3 text-sm font-medium text-black">
                  <Mail className="h-4 w-4" /> Email
                </a>

                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>

                <a href={profile.resume} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
