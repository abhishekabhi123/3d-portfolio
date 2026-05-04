
import HeroSection from "./components/hero/HeroSection"

function App() {


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-lg font-semibold tracking-tight">Abhishek P S</span>
          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <HeroSection />
        <section id="about" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">


            I'm a Full‑Stack Software Engineer with 3+ years of experience building enterprise SaaS platforms. At Neutrinos, I built and maintained microservices that power complex business workflows for large-scale clients. I work across the full stack: React, TypeScript, and Node.js on the product side, PostgreSQL for data, and Kubernetes and CI/CD pipelines on the infrastructure side.
          </p>
        </section>
        <section id="skills" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-[0.2em] mb-3">
                Frontend
              </h3>
              <p className="text-sm text-slate-300">
                React 18, Next.js, TypeScript (strict), Tailwind CSS, shadcn/ui,
                Zustand, React Query (TanStack), Redux.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-[0.2em] mb-3">
                Backend & APIs
              </h3>
              <p className="text-sm text-slate-300">
                Node.js, Express.js, REST APIs, WebSockets, microservices, Prisma ORM.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-[0.2em] mb-3">
                Databases & Caching
              </h3>
              <p className="text-sm text-slate-300">
                PostgreSQL, MongoDB, MySQL, Redis — schema design and query optimisation.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-[0.2em] mb-3">
                DevOps & Tooling
              </h3>
              <p className="text-sm text-slate-300">
                Docker, Kubernetes (AKS), Azure DevOps, GitHub Actions, Grafana, CI/CD,
                Git, Vite, Jest, Vitest, Postman, Agile/Scrum, Linear.
              </p>
            </div>
          </div>
        </section>
        <section id="experience" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 h-full w-px bg-slate-800 md:left-4" />

            <div className="space-y-8">
              {/* SDE II */}
              <article className="relative pl-10 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-1 top-2 h-4 w-4 rounded-full border-2 border-sky-500 bg-slate-950 md:left-2" />

                <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">
                        Software Development Engineer II · Neutrinos
                      </h3>
                      <p className="text-xs text-slate-400">
                        Jul 2024 – Present · Bengaluru, India
                      </p>
                    </div>
                    <p className="text-xs text-sky-400 uppercase tracking-[0.2em]">
                      Full‑stack · SaaS
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-slate-300">
                    Leading full‑stack work on three core services—an integration
                    layer, case manager, and agent portal—for banking and insurance
                    clients, owning everything from React frontends and Node.js APIs
                    to deployment and monitoring.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Set up a Kubernetes‑based staging environment, CI/CD with Docker
                    and Azure DevOps, and Grafana dashboards with alerting to cut
                    deployment time and MTTR.
                  </p>
                </div>
              </article>

              {/* Associate Product Engineer */}
              <article className="relative pl-10 md:pl-12">
                <div className="absolute left-1 top-2 h-4 w-4 rounded-full border-2 border-slate-600 bg-slate-950 md:left-2" />

                <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">
                        Associate Product Engineer · Neutrinos
                      </h3>
                      <p className="text-xs text-slate-400">
                        May 2023 – Jul 2024 · Bengaluru, India
                      </p>
                    </div>
                    <p className="text-xs text-sky-400 uppercase tracking-[0.2em]">
                      Full‑stack · Internal tools
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-slate-300">
                    Built a full‑stack quiz platform with Angular, Node.js, and
                    MongoDB used by 100+ employees and as a demo for Neutrinos Studio
                    capabilities.
                  </p>
                  <p className="mt-2 text-xs text-slate-400">
                    Developed a QR‑code–based event app for real‑time gift tracking at
                    company events, reducing manual admin work for 100+ participants.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="projects" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="space-y-8">

            {/* TravelStoryMap */}
            <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">TravelStoryMap</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sky-400">
                    Map-based platform for pinning and sharing travel stories
                  </p>
                </div>
                {/* Replace with your actual links */}
                <div className="flex gap-2 text-xs">
                  <a
                    href="https://travel-story-amber.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-slate-700 px-2 py-1"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/abhishekabhi123/travel-story"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-slate-700 px-2 py-1"
                  >
                    Code
                  </a>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                Map-based web app where users can drop pins anywhere on a Mapbox map,
                write a story, and upload photos, or search for a place by name.
                Images are uploaded to Cloudinary and stored via URLs in MongoDB, and
                the Mapbox Geocoding API powers place search and smooth fly-to
                animations between pins.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                React · TypeScript · Tailwind CSS · Node.js · Express · MongoDB ·
                Mapbox GL JS · Cloudinary · Vercel
              </p>
            </article>

            {/* DepRadar */}
            <article className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">DepRadar</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-sky-400">
                    VS Code extension for npm dependency analysis
                  </p>
                </div>
                {/* Replace with your extension link / repo */}
                <div className="flex gap-2 text-xs">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=AbhishekPS.depradar"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-slate-700 px-2 py-1"
                  >
                    Marketplace
                  </a>
                  <a
                    href="https://github.com/abhishekabhi123/depradar"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-slate-700 px-2 py-1"
                  >
                    Code
                  </a>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-300">
                Published VS Code extension that scans a project&apos;s package.json to
                find unused dependencies, outdated packages (grouped by major/minor/
                patch), and npm audit vulnerabilities. Includes an interactive graph
                of direct and transitive dependencies and a one-click refresh to
                re-run analysis without restarting VS Code.
              </p>
              <p className="mt-3 text-xs text-slate-400">
                TypeScript · VS Code Extension API · Node.js · npm audit · ESBuild · ESLint
              </p>
            </article>
          </div>
        </section>
        <section id="contact" className="py-16 border-t border-slate-800">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            {/* Left: CTA text */}
            <div className="max-w-md space-y-3">
              <h2 className="text-2xl font-semibold">Let’s work together</h2>
              <p className="text-sm text-slate-300">
                I’m currently working as an SDE II at Neutrinos and open to
                opportunities building performant web and fintech products.
                If you think I&apos;d be a good fit for your team, feel free to
                reach out.
              </p>

              {/* Primary contact button */}
              <a
                href="mailto:vadakkemadamabhishek@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950"
              >
                Say hello
                <span aria-hidden>↗</span>
              </a>
            </div>

            {/* Right: contact cards */}
            <div className="grid gap-4 text-sm text-slate-300 md:min-w-[260px]">
              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Email
                </p>
                <a
                  href="mailto:vadakkemadamabhishek@gmail.com"
                  className="mt-1 block text-sm text-sky-400"
                >
                  vadakkemadamabhishek@gmail.com
                </a>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Phone
                </p>
                <a
                  href="tel:+918281176998"
                  className="mt-1 block text-sm text-slate-300"
                >
                  +91‑8281176998
                </a>
                <p className="mt-1 text-xs text-slate-500">Bengaluru, India</p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Online
                </p>
                <div className="mt-1 flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://www.linkedin.com/in/abhishek-p-s-8876a31b3"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-slate-700 px-3 py-1 text-slate-200"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/abhishekabhi123"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-slate-700 px-3 py-1 text-slate-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
