import { FaArrowRight, FaGithub } from 'react-icons/fa6'

function App() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-slate-100">
      <section className="animate__animated animate__fadeInUp mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          React portfolio starter
        </p>

        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl">
          Build something people remember.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Vite, React, Tailwind CSS, React Icons, and Animate.css are configured
          and ready for your portfolio.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View projects <FaArrowRight aria-hidden="true" />
          </a>

          <a
            href="https://github.com/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 font-semibold transition hover:border-slate-500 hover:bg-slate-900"
          >
            <FaGithub aria-hidden="true" /> GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App

