import Hero from "@/components/Hero";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="text-green-600 bg-black h-screen snap-y snap-mandatory overflow-scroll z-0">
      <main>
        <Header/>

        {/* Hero */}
        <section id="hero" className="snap-center">
        <Hero/>
        </section>

        {/* About */}
        <section id="about" className="snap-center">

        </section>

        {/* Experience */}
        <section id="experience" className="snap-center">

        </section>

        {/* Skills */}
        <section id="skills" className="snap-center">

        </section>

        {/* Projects */}
        <section id="projects" className="snap-center">

        </section>

        {/* Contact Me */}

     
      </main>
    </div>
  )
}
