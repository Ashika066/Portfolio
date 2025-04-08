"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import Java from "@/assets/icons/java.svg";
import Python from "@/assets/icons/python.svg";
import ML from "@/assets/icons/ml.svg";
import DS from "@/assets/icons/ds.svg";
import Canva from "@/assets/icons/canva.svg";
import Openicon from "@/assets/icons/chatgpt.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import Tensorflow from "@/assets/icons/tensorflow.svg";
import Dbms from "@/assets/icons/dbms.svg";
import React from "@/assets/icons/react.svg";
import R from "@/assets/icons/r.svg";
import Mysql from "@/assets/icons/mysql.svg";
import Html5 from "@/assets/icons/html5.svg";
import Css3 from "@/assets/icons/css3.svg";
import Squarejs from "@/assets/icons/square-js.svg";
import Statistics from "@/assets/icons/statistics.svg";
import Git from "@/assets/icons/git.svg";
import Github from "@/assets/icons/github.svg";
import Numpy from "@/assets/icons/numpy.svg";
import PowerBI from "@/assets/icons/powerbi.svg";
import MSOffice from "@/assets/icons/msoffice.svg";
import Vsc from "@/assets/icons/vsc.svg";
import Jetbrains from "@/assets/icons/jetbrains.svg";
import Jupyter from "@/assets/icons/jupyter.svg";
import Oracle from "@/assets/icons/oracle.svg";
import Kaggle from "@/assets/icons/kaggle.svg";
import Pandas from "@/assets/icons/pandas.svg";
import Keras from "@/assets/icons/keras.svg";
import Windows from "@/assets/icons/windows.svg";
import Mongodb from "@/assets/icons/mongodb.svg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import NodeJS from "@/assets/icons/nodeJS.svg";
import ExpressJS from "@/assets/icons/expressJS.svg";
import Ejs from "@/assets/icons/ejs.svg";
import Rest from "@/assets/icons/rest.svg";
import Tailwind from "@/assets/icons/tailwind.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Java",
    iconType: Java,
  },
  {
    title: "Python",
    iconType: Python,
  },
  {
    title: "ML",
    iconType: ML,
  },
  {
    title: "DS",
    iconType: DS,
  },
  {
    title: "Canva",
    iconType: Canva,
  },
  {
    title: "ChatGPT",
    iconType: Openicon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Tensorflow",
    iconType: Tensorflow,
  },
  {
    title: "DBMS",
    iconType: Dbms,
  },
  {
    title: "React",
    iconType: React,
  },
  {
    title: "R",
    iconType: R,
  },
  {
    title: "MySQL",
    iconType: Mysql,
  },
  {
    title: "HTML5",
    iconType: Html5,
  },
  {
    title: "CSS3",
    iconType: Css3,
  },
  {
    title: "JavaScript",
    iconType: Squarejs,
  },
  {
    title: "Statistics",
    iconType: Statistics,
  },
  {
    title: "Git",
    iconType: Git,
  },
  {
    title: "Github",
    iconType: Github,
  },
  {
    title: "Numpy",
    iconType: Numpy,
  },
  {
    title: "PowerBI",
    iconType: PowerBI,
  },
  {
    title: "MS Office",
    iconType: MSOffice,
  },
  {
    title: "VS Code",
    iconType: Vsc,
  },
  {
    title: "Jetbrains",
    iconType: Jetbrains,
  },
  {
    title: "Jupyter Notebook",
    iconType: Jupyter,
  },
  {
    title: "Oracle",
    iconType: Oracle,
  },
  {
    title: "Kaggle",
    iconType: Kaggle,
  },
  {
    title: "Pandas",
    iconType: Pandas,
  },
  {
    title: "Keras",
    iconType: Keras,
  },
  {
    title: "Windows",
    iconType: Windows,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "MongoDB",
    iconType: Mongodb,
  },
  {
    title: "NodeJS",
    iconType: NodeJS,
  },
  {
    title: "ExpressJS",
    iconType: ExpressJS,
  },
  {
    title: "EJS",
    iconType: Ejs,
  },
  {
    title: "REST",
    iconType: Rest,
  },
  {
    title: "Tailwind CSS",
    iconType: Tailwind,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Travelling",
    emoji: "🛣️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "👩‍🍳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about">
      <div className="py-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="A Glimpse Into My World"
            title="About Me"
            description="Learn more about who I am, what I do and what inspires me"
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                <CardHeader
                  title="My Reads"
                  description="Explore the books shaping my perspectives."
                />
                <div className="w-40 mx-auto mt-2 md:mt-0">
                  <Image src={bookImage} alt="Book cover" />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:50s]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6"
                  itemsWrapperClassName="animate-move-right [animation-duration:60s]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="map"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={smileMemoji}
                    alt="smiling memoji"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
