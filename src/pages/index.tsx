import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-green-600 bg-black h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-green-500/20 scrollbar-thin  scrollbar-thumb-green-700/80">
      <main>
        <Header/>
        <section id="hero" className="snap-start">
        <Hero/>
        </section>
        <section id="about" className="snap-center">
        <About/>
        </section>
        <section id="experience" className="snap-center">
          <Experience/>
        </section>
        <section id="skills" className="snap-center">
          <Skills/>
        </section>
        <section id="projects" className="snap-center">
          <Projects/>
        </section> 

        <Link href={'#hero'}>
        <footer className="sticky bottom-5 w-full cursor-pointer z-30">
          <div className=" flex items-center justify-center"><img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" src="/senzo.png" alt="" /></div>
        </footer>
        </Link>
      </main>
    </div>
  )
}


export const getStaticProps =async () =>{
  
}