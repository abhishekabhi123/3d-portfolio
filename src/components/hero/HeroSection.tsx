import RoomCanvas from "./RoomCanvas"

function HeroSection() {
    return (
        <section className="flex flex-col gap-8 py-12 md:flex-row md:items-center">

        <div className="w-72 flex-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <RoomCanvas />
        </div>
        <div className="flex-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
                Full‑Stack Software Engineer
            </p>
            <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Building performant web & fintech experiences.
            </h1>
            <p className="text-sm text-slate-300">
                I craft full‑stack applications with React, Node.js, TypeScript and
                PostgreSQL, focusing on clean architecture, reliability, and DX.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
                <a
                    href="#projects"
                    className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100"
                >
                    Contact
                </a>
            </div>
        </div>


        </section>
    );
}

export default HeroSection;