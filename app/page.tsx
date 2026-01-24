export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-50 to-white text-zinc-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block mb-4 text-sm text-zinc-500">
            Frontend Developer
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            I build clean, fast, <br /> and scalable web apps.
          </h1>

          <p className="mt-6 text-zinc-600 leading-relaxed max-w-xl">
            I focus on crafting interfaces that feel effortless and codebases
            that stay sane under pressure. Modern stack, real-world mindset.
          </p>
        </div>

        {/* Picture */}
        <div className="relative">
          <div className="absolute inset-0 -rotate-2 rounded-3xl bg-linear-to-tr from-zinc-200 to-zinc-100" />
          <div className="relative w-full h-80 rounded-3xl bg-zinc-200 flex items-center justify-center text-zinc-500">
            Your Photo
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-28">
  <h2 className="text-2xl font-semibold mb-16">Selected Work</h2>

  <div className="space-y-20">
    {[1, 2].map((p, i) => (
      <div
        key={p}
        className={`grid md:grid-cols-2 gap-12 items-center ${
          i % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 -rotate-2 rounded-3xl bg-zinc-200" />
          <div className="relative h-72 rounded-3xl bg-linear-to-br from-zinc-100 to-zinc-50 flex items-center justify-center text-zinc-400">
            Project Image
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-3">Project Title</h3>
          <p className="text-zinc-600 leading-relaxed max-w-md">
            Short explanation of what this project is, who it’s for, and the
            problem it solves. Think in outcomes, not features.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
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

    <div className="md:col-span-2 space-y-6 text-zinc-600 leading-relaxed">
      <p>
        I’m a frontend developer obsessed with clarity. In code. In interfaces.
        In how a product *feels* when someone touches it for the first time.
      </p>
      <p>
        I believe simple systems scale better than clever ones. My goal is to
        turn messy ideas into calm, predictable software that people actually
        enjoy using.
      </p>

      <div className="pt-6 flex flex-wrap gap-3 text-xs">
        {["Next.js", "TypeScript", "Tailwind", "Zustand", "Redux"].map((s) => (
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

    <p className="text-zinc-600 leading-relaxed mb-6">
      If you have a project in mind, a question, or just want to talk about an
      idea, feel free to reach out.
    </p>

    <a
      href="mailto:youremail@example.com"
      className="inline-block text-sm font-medium text-zinc-900 border-b border-zinc-300 hover:border-zinc-900 transition"
    >
      youremail@example.com
    </a>
  </div>
</section>
    </main>
  )
}



