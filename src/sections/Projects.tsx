import MentorAILandingPage from "@/assets/images/MentorAI-landing-page.png";
import WaterQualityPredictionLandingPage from "@/assets/images/water-quality-prediction-landing-page.png";
import SpotifyCloneLandingPage from "@/assets/images/spotify-clone-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Website",
    year: "2025",
    title: "MentorAI - AI Powered Career Coach",
    results: [
      { title: "Build Your Resume and Cover Letter" },
      { title: "Domain Wise Interview Preparation" },
      { title: "Stay Updated with Latest Industry Trends" },
    ],
    link: "https://mentor-ai-tech.vercel.app/",
    image: MentorAILandingPage,
  },
  {
    company: "Web App",
    year: "2024",
    title: "Spotify UI Clone",
    results: [
      { title: "Seamless Playback with User Control" },
      { title: "Responsive Music Discovery Platform" },
      { title: "Curated Songs, Artists & Interactive UI" },
    ],
    link: "https://github.com/Ashika066/Spotify-UI-Clone",
    image: SpotifyCloneLandingPage,
  },
  {
    company: "Streamlit",
    year: "2024",
    title: "Water Quality Prediction",
    results: [
      { title: "Deep Learning Model with 94.5% Accuracy" },
      { title: "ML-Based Contamination Detection" },
      { title: "Interactive Dashboard for Visualization" },
    ],
    link: "https://github.com/Ashika066/IBM-CSRBOX-Water-Quality-Prediction",
    image: WaterQualityPredictionLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Real World Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences."/>
        
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View Project</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-t-xl max-w-full md:rounded-t-3xl lg:rounded-t-3xl mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
