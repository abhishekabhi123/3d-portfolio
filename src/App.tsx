
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
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
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <HeroSection />
        <section id="about" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>Short about text goes here.</p>
        </section>
        <section id="skills" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        </section>
        <section id="projects" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        </section>
        <section id="experience" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        </section>
        <section id="contact" className="py-16 border-t border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        </section>
      </main>
    </div>
  )
}

export default App
