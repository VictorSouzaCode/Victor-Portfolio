"use client"
import Image from "next/image";
import { useTheme } from "@/app/providers";

export default function Home() {
  const { toggle } = useTheme();

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Hero */}
        <section className="mb-32">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            <div className="grid gap-10 p-10 md:grid-cols-2 md:items-center md:p-16">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  Victor
                  <span className="block text-zinc-500">Web Developer</span>
                </h1>

                <p className="mt-6 max-w-xl text-lg text-zinc-600">
                  I build reliable web applications with Next.js, TypeScript, and
                  modern frontend tools. My focus is clarity, performance, and
                  solving real problems without overengineering.
                </p>
              </div>

              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
                  alt="Developer at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-32">
          <h2 className="mb-10 text-2xl font-medium">Selected Work</h2>

          <div className="grid gap-12">
            {/* Project 1 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                  alt="Dashboard preview"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-medium">
                  Internal Dashboard Tool
                </h3>

                <p className="mt-3 text-zinc-600">
                  A production-style dashboard with authentication, protected
                  routes, and real CRUD flows. Designed like an internal company
                  system.
                </p>

                <p className="mt-4 text-sm text-zinc-500">
                  Next.js · TypeScript · Tailwind · Zustand / Redux
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://your-dashboard-live-link"
                    target="_blank"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200"
                  alt="Paint app preview"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-xl font-medium">Paint App</h3>

                <p className="mt-3 text-zinc-600">
                  A browser-based paint application with custom drawing logic,
                  multiple tools, colors, and image export. Built as a technical
                  challenge and creative playground.
                </p>

                <p className="mt-4 text-sm text-zinc-500">
                  React · TypeScript · Canvas API · Redux
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://your-paint-app-link"
                    target="_blank"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/your-repo"
                    target="_blank"
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mb-32">
          <h2 className="mb-6 text-2xl font-medium">About</h2>
          <p className="max-w-2xl text-zinc-600">
            I’m a frontend-focused developer who enjoys turning complex ideas
            into simple, usable interfaces. I care about structure, performance,
            and writing code that’s easy to reason about and maintain.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="mb-6 text-2xl font-medium">Contact</h2>
          <div className="mb-4 inline-block rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-500">
            Available for freelance work
          </div>
          <p className="text-zinc-600">
            Let’s build something together.
            <br />
            <a
              href="mailto:youremail@example.com"
              className="font-medium underline underline-offset-4"
            >
              youremail@example.com
            </a>
          </p>
          
        </section>
      </div>
    </main>
  );
}
