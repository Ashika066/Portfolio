import csrbox from "@/assets/images/csrbox.png";
import imarticus from "@/assets/images/imarticus.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Data Analytics Intern",
    position: "IBM-CSRBOX",
    text: "During my internship, I developed a water quality detection system aligned with the Sustainable Development Goals (SDG), featuring a machine learning model and integrated EDA module for automated reporting. Enhanced accessibility through a sleek, interactive Streamlit interface offering real-time insights and visualizations. This project focusing on AI for social impact and sustainable development.",
    avatar: csrbox,
  },
  {
    name: "AI & ML Intern",
    position: "Imarticus Learning Pvt. Ltd.",
    text: "During my internship, I worked extensively with Power BI to build interactive dashboards and visual reports. I also developed machine learning models, including a heart disease prediction system, and gained hands-on experience with MySQL, data preprocessing, and model evaluation. This experience sharpened my analytical and problem-solving skills, along with my practical understanding of real-world AI/ML applications.",
    avatar: imarticus,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Where I Have Worked Before"
          description="Explore the roles that have shaped my expertise and reflect the depth of my professional journey"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:50s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
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
