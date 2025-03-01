import Hero from "@/components/Hero";
import Header from "../components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Link from "next/link";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Project,Skill,Experience as Experiences,PageInfo,Social } from "../../typings";
import { fetchPageInfo } from "../../utils/fetchPageInfo";
import { fetchExperience } from "../../utils/fetchExperience";
import { fetchSkills } from "../../utils/fetchSkills";
import { fetchProjects } from "../../utils/fetchProjects";
import { fetchSocials } from "../../utils/fetchSocials";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";



type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  }


export default function Home({pageInfo,experiences,projects,skills,socials}:Props) {
  return (
    <div className="text-gray-200 bg-[#111827] min-h-screen">
      <main className="max-w-6xl mx-auto px-2 md:px-4">
        {/* Desktop/Laptop layout */}
        <div className="lg:flex lg:gap-4">
          {/* Left side - content */}
          <div className="lg:w-5/12 lg:sticky lg:top-0 lg:h-screen">
            <div className="lg:py-4">
              <Header socials={socials} pageInfo={pageInfo} />
              <section id="hero" className="snap-start h-screen lg:h-[calc(100vh-4rem)]">
                <Hero pageInfo={pageInfo}/>
              </section>
            </div>
          </div>

          {/* Right side - content */}
          <div className="lg:w-7/12 space-y-32 lg:space-y-40 lg:pt-40 lg:py-20 
          snap-y snap-mandatory overflow-y-scroll scrollbar-thin 
          scrollbar-track-gray-400/20 scrollbar-thumb-[#22c55e]/80">
            <section id="experience" className="snap-start">
              <Experience experiences={experiences} />
            </section>
            <section id="skills" className="snap-start">
              <Skills skills={skills}/>
            </section>
            <section id="projects" className="snap-start">
              <Projects projects={projects}/>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}


export  const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experiences[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

// async (params:Props) => {
  
//     if (!pageInfo||!experiences||!skills||!projects||!socials) {
//       return {
//         redirect:"/error",
//       };
//     }
// }

  return {
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate:5000,

  }
}