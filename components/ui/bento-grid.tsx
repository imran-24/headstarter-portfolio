"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

import ProjectList from "../projects";
import Socials from "../socials";
import Resume from "../resume";
import CopyEmail from "../copy-email";
import Skills from "../skills";
import Experience from "../experience";
import Contact from "../contact";
import Updates from "../updates";
import { BackgroundLines } from "./background-lines";
import { MoreProjects } from "../more-projects";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[5.4rem] grid-cols-2 sm:grid-cols-9 gap-2 w-full mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "md.imransyam1956@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border group/bento hover:shadow-sm transition duration-200 shadow-input dark:shadow-none justify-center flex flex-col",
        className
      )}
      // style={{
      //   //   add these two
      //   //   you can generate the color from here https://cssgradient.io/
      //   background: "rgb(4,7,29)",
      //   backgroundColor:
      //     "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      // }}
    >
      {id === 1 && (
        <Updates />
      )}
      {id === 2 && (
        <ProjectList />
      )}

      {id === 3 && (
        <Experience />
      )}
      {id === 4 && (
        <Contact />
      )}
      {id === 5 && (
        <Skills />
      )}
      {id == 6 && (
          <MoreProjects />
        )}
      {
        id === 7 && (
          <CopyEmail
          copied={copied}
          description={description}
          handleCopy={handleCopy} />
        )
      }
      {id === 8 && (
       <Resume /> 
      )}
      {id === 9 && (
        <Socials />
      )}
    </div>
  );
};
