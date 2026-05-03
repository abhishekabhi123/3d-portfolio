import RoomCanvas from "./RoomCanvas"

function HeroSection() {

    const hanndleMonitorClick = () => {
        const el = document.getElementById("projects")
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const handleBookshelfClick = () => {
        document.getElementById('skills')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handleWindowClick = () => {
        document.getElementById('about')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (
        <section className="flex flex-col gap-8 py-12 md:flex-row md:items-center">

            {/* 3D Canvas Container */}
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] flex-1 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 group">
                <RoomCanvas onMonitorClick={hanndleMonitorClick} onBookshelfClick={handleBookshelfClick}
                    onWindowClick={handleWindowClick} />

                {/* Interactive Hint Overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur-sm border border-slate-700/50">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        Drag to rotate &bull; Click objects to explore
                    </span>
                </div>
            </div>
            <div className="flex-1 space-y-4">
                <p className="text-sm uppercase tracking-[0.25em] text-sky-400">
                    Full‑Stack Software Engineer
                </p>
                <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                    Code That Works. Products That Scale.
                </h1>
                <p className="text-sm text-slate-300">
                    I build full‑stack applications that are fast, reliable, and easy to maintain — React, Node.js, TypeScript, and PostgreSQL
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                    <a
                        href="#projects"
                        className="rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400 transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Abhishek_PS_Resume.pdf"
                        className="flex items-center gap-2 rounded-md border border-sky-500/50 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400 hover:bg-sky-500/20 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-800 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>


        </section>
    );
}

export default HeroSection;