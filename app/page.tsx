// For later:
// Make the text bigger, at least the text that is not a paragraph
// Work in my contact section, add github link and my email, maybe change the words a little bit
// Add the project title,
// The github link, the live demo link, and the description of the projects
// add an image of the projects
// add one image of mine in the hero section
// add my location in the hero section as well
import { FaGithub } from "react-icons/fa"

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-zinc-50 to-white text-zinc-900">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I am Victor
          </h1>
          {/* <span className="inline-block text-lg text-zinc-500 mt-2">
            Web Developer
          </span> */}

          {/* <p className=" text-zinc-600 leading-relaxed max-w-xl mt-2">
            I craft responsive, reliable web apps with a focus on clarity and performance.
          </p> */}

          <p className="text-lg leading-8 mt-2">Front-end specialist with strong Next.js and React fundamentals. You can expect clean structure, readable code, and a teammate you’ll actually enjoy working with.
            <span className="block mt-2">
              Based in Brazil, working with clients worldwide.
            </span>
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
          <p className="text-zinc-600 leading-relaxed max-w-md text-lg">
            Short explanation of what this project is, who it’s for, and the
            problem it solves. Think in outcomes, not features.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-sm">
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

    <div className="md:col-span-2 space-y-6 text-zinc-600">
      <p className="text-lg leading-8">
        I’m a front-end web developer with expertise in Next.js and React. I help people bring clarity to their ideas through thoughtful work and clear communication. Clients rely on me not just to build things, but to think with them, solve real problems, and move projects forward with confidence.
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



