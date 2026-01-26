
import { FaGithub } from "react-icons/fa"
import { projects } from "@/data/projects"
import Image from "next/image"


export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-50 to-white text-zinc-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I am Victor
          </h1>

          <p className="text-lg leading-8 mt-2">Front-end specialist with strong Next.js and React fundamentals. You can expect clean structure, readable code, and a teammate you’ll actually enjoy working with.
            <span className="block mt-2">
              Based in Brazil, working with clients worldwide.
            </span>
          </p>
        </div>

        {/* Picture */}
        <div className="relative">
          <div className="absolute inset-0 -rotate-4 rounded-3xl bg-linear-to-tr from-zinc-300 to-zinc-200" />
          <div className="relative w-full h-80 rounded-3xl bg-zinc-200 flex items-center justify-center text-zinc-500">
            <Image 
            src="/photos/portfolio-image-7.png"
            alt="My-Photo"
            fill
            className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-28">
  <h2 className="text-2xl font-semibold mb-16">Selected Work</h2>

  <div className="space-y-20">
    {projects.map((p, i) => (
      <div
        key={p.id}
        className={`grid md:grid-cols-2 gap-12 items-center ${
          i % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 -rotate-4 rounded-3xl bg-linear-to-br from-zinc-300 to-zinc-200" />
          <div className="relative h-72 rounded-3xl bg-linear-to-br from-zinc-300 to-zinc-200 flex items-center justify-center text-zinc-400">
            {p.image ? 
            <Image 
            src={p.image}
            alt={p.title}
            fill
            className="object-cover rounded-2xl"
            /> : "No Image"}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">{p.title}</h3>
          <p className="text-zinc-600 leading-relaxed max-w-md text-lg">
            {p.description}
          </p>
          <div className="flex gap-2 mt-2 opacity-80">
            <a href={p.links.live} className="hover:underline hover:opacity-100">Live</a>
            <a href={p.links.code} className="hover:underline hover:opacity-100">Code</a>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {p.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

{/* ABOUT */}
<section className="max-w-6xl mx-auto px-6 py-28 border-t border-zinc-200">
  <div className="grid md:grid-cols-2 gap-12">
    <div className="md:col-span-1">
      <h2 className="text-2xl font-semibold">About</h2>
    </div>

    <div className="md:col-span-2 space-y-6 text-zinc-600">
      <p className="text-lg leading-8">
        I’m a front-end web developer with expertise in Next.js and React. I bring clarity to ideas through my thoughtful work. You can rely on me not just to build things, but to think together, solve real problems, and move projects forward with confidence.
      </p>
      <p className="text-lg leading-8">
        Whether I’m working solo or inside a team, I take ownership of the outcome. I care about results, deadlines, and building things that actually solve problems.
      </p>
      <p className="text-lg leading-8">
        Outside of code, I lift weights and practice Muay Thai. Fighting teaches discipline, focus, and consistency—qualities I bring into my work every day. I value doing things well, showing up fully, and building things that last.
      </p>

      <div className="pt-6 flex flex-wrap gap-3 text-xs">
        {["Next.js", "React.js", "TypeScript", "Tailwindcss", "Shadcn/ui", "Zustand", "Redux"].map((s) => (
          <span
            key={s}
            className="px-3 py-1 rounded-full border border-zinc-200 text-zinc-700 bg-white"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

{/* CONTACT */}
<section className="max-w-6xl mx-auto px-6 py-28 border-t border-zinc-200">
  <div className="max-w-xl">
    <h2 className="text-2xl font-semibold mb-4">Contact</h2>

    <p className="text-zinc-600 leading-relaxed mb-6 text-lg">
      If you have a question, a project in mind, or just want to talk about an
      idea, feel free to reach out.
    </p>

          <div className="flex items-center gap-2">
            <a
              className="inline-block text-md font-medium text-zinc-900 border-b border-zinc-300"
            >
              victor.souza.pro@outlook.com
            </a>
            <span className="mx-1">|</span>
            <a 
            href="https://github.com/VictorSouzaCode"
            className="text-xl"
            >
              
              <FaGithub />
            </a>
          </div>
  </div>
</section>
    </main>
  )
}



