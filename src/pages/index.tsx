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
    <div className="text-green-600 bg-black h-screen snap-y snap-mandatory overflow-scroll z-0  scrollbar-track-green-500/20 scrollbar-thin  scrollbar-thumb-green-700/80">
      <main>
        <Header socials={socials} pageInfo={pageInfo}  />
        <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
        </section>
        <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
        </section>
        <section id="experience" className="snap-center">
          <Experience experiences={experiences} />
        </section>
        <section id="skills" className="snap-center">
          <Skills skills = {skills}/>
        </section>
        <section id="projects" className="snap-center">
          <Projects projects = {projects}/>
        </section> 

        <Link href={'#hero'}>
        <footer className="sticky bottom-5 w-full cursor-pointer z-30">
          <div className=" flex items-center justify-center">
            <Image className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" src={urlForImage(pageInfo?.heroImage).url()}  width={50} height={50} alt="" />
          </div>
        </footer>
        </Link>
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