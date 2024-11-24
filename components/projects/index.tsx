"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import Overlay from "../overlay";
import { Cards } from "../cards";
import { ProjectModal } from "../modals/project-modal";
import { div } from "framer-motion/client";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export const projects = [
  {
    name: "Airbnb Clone",
    description: "A comprehensive clone that mimics Airbnbs functionality.",
    backgroundImage: "/sea.jpg",
    projectImages: ["/airbnb/1.png"],
    containerClassName: "col-span-1 row-span-1 lg:row-span-2  h-full",
    href: "https://house-renting-iota.vercel.app/",
    imageStyle:
      "absolute -right-4 lg:-right-[60%] lg:scale-150  filter -bottom-11 lg:-bottom-0 object-contain rounded-2xl",
  },
  {
    name: "",
    description: "",
    backgroundImage: "/window.jpg",
    projectImages: ["/formify/1.png"],
    containerClassName: "",
    href: "https://jotion-roan-three.vercel.app/",
    imageStyle:
      "absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl",
  },
  {
    name: "",
    description: "",
    backgroundImage: "/window.jpg",
    projectImages: ["/jotion/3.png"],
    containerClassName: "",
    href: "https://jotion-roan-three.vercel.app/",
    imageStyle:
      "absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl",
  },
];

const ProjectList = () => {
  return (
    <>
      <div className='grid relative grid-cols-1 lg:grid-cols-2 auto-rows-[11.3rem] gap-2 justify-center  overflow-hidden'>
        
      {/* <div
          className={cn(
            "h-full w-full group hidden relative lg:flex overflow-hidden  group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none",
            "col-span-1 row-span-1 lg:row-span-2  h-full"
          )}
        > */}

        <div
          className={cn(
            "h-full w-full group relative flex overflow-hidden  group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none",
            "col-span-1 row-span-2  h-full"
          )}
        >
            <Cards />
        </div>
        {/* <div className='hidden lg:block  lg:relative overflow-hidden col-span-1 row-span-1 border rounded-3xl group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none ' />
        <WobbleCard
          className='group relative hidden lg:flex overflow-hidden col-span-1 row-span-1 border rounded-xl group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none'
        >
          <Overlay />
          <Image
            src={"/window.jpg"}
            fill
            className='object-center object-cover'
            alt=''
          />
          
          <Image
            src={"/notion.png"}
            width={500}
            height={500}
            alt='linear demo image'
            className='absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl'
          />
        </WobbleCard> */}
      </div>
    </>
  );
};

export default ProjectList;

{/*
{projects.map((project, index) =>
          index % 2 == 0 ? (
            <div
              key={index}
              className={cn(
                "h-full w-full group hidden relative lg:flex overflow-hidden  group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none",
                project.containerClassName
              )}
            >
            
            <WobbleCard
            key={index}
            className='h-full w-full group hidden relative lg:flex overflow-hidden '
            //   containerClassName={project.containerClassName}
          >
            <div className='max-w-xs absolute left-4 top-2 z-50'>
              <h2 className='text-left text-balance text-base md:text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-white'>
                {project.name}
              </h2>
              <p className='mt-4 text-left  text-sm text-neutral-200'>
                {project.description}
              </p>
            </div>
            <Image
              src={project.backgroundImage}
              fill
              className='object-center object-cover'
              alt=''
            />
           
            <Image
              src={project.projectImages[0]}
              width={1000}
              height={1000}
              alt='linear demo image'
              className={project.imageStyle}
            />
          </WobbleCard>
        </div>
      ) : (
        <div
          key={index}
          className={cn(
            "h-full w-full group hidden relative lg:flex overflow-hidden  group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none",
            project.containerClassName
          )}
        >
         
          <WobbleCard
            key={index}
            className='h-full w-full group hidden relative lg:flex overflow-hidden rounded-3xl  border'
            //   containerClassName={project.containerClassName}
          >
            <div></div>
            
          </WobbleCard>
        </div>
      )
    )}
*/}