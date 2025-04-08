import topper from "@/assets/images/topper.jpg";
import hackathon from "@/assets/images/sih.jpg";
import buildWithIndia from "@/assets/images/buildWithIndia.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const achievements = [
  {
    name: "Academic Topper",
    position: "B.Tech - 1st Year",
    text: "Honored to achieve 1st position in my B.Tech first year with a CGPA of 8.8. This milestone reflects consistent dedication, academic excellence, and a strong foundation in core technical subjects.",
    avatar: topper,
  },
  {
    name: "Hackathon Winner (Internal)",
    position: "Smart India Hackathon",
    text: "Developed an AI-powered crop disease prediction system with web and mobile apps. Trained an ML model on crop images to deliver actionable insights for farmers. Selected as a finalist in this national-level hackathon, driving innovation in agriculture.",
    avatar: hackathon,
  },
  {
    name: "Academic Topper",
    position: "B.Tech - 2nd Year",
    text: "Secured the first position in the second year of B.Tech with a CGPA of 8.4, demonstrating academic excellence and strengthening core technical skills.",
    avatar: topper,
  },
  {
    name: "Tech Participant",
    position: "Build With India Hackathon",
    text: "Participated in the Build with India Hackathon, contributing to an AI-based solution combining web and app development with machine learning for real-world agricultural impact.",
    avatar: buildWithIndia,
  },
];

export const AchievementsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Achievements"
          title="Highlights of My Journey So Far"
          description="Celebrating the milestones that showcase my dedication, skill growth, and impact through academics, projects and competitions"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {achievements.map((achievement) => (
                  <Card
                    key={achievement.name}
                    className="max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={achievement.avatar}
                          alt={achievement.name}
                          className="max-h-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{achievement.name}</div>
                        <div className="text-sm text-white/40">
                          {achievement.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {achievement.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
