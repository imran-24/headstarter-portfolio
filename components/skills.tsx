import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Skills = () => {
  const leftLists = [
    { name: "ReactJS", class: "font-bold font-sans text-xl" },
    { name: "Express", class: " font-light font-serif text-3xl" },
    { name: "Typescript", class: "font-mono font-medium  " },
    { name: "NextJs", class: "font-sans font-light font-serif text-xl" },
    { name: "Tailwind", class: "font-sans font-bold text-2xl" },
    { name: "Firebase", class: "font-semibold font-semibold  text-lg" },
  ];
  const rightLists = [
    { name: "ReactJS", class: "font-bold font-serif text-lg" },
    { name: "Express", class: " font-light  text-2xl" },
    { name: "Typescript", class: " font-medium  text-xl" },
    { name: "NextJs", class: "font-mono  font-light font-serif text-lg" },
    { name: "Tailwind", class: " font-bold " },
    {
      name: "Firebase",
      class: "font-semibold font-semibold font-sans  text-2xl",
    },
  ];
  return (
    <div className=''>
      <div className='rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden '>
        <InfiniteMovingCards
          items={rightLists}
          direction='right'
          speed='fast'
        />
        <InfiniteMovingCards items={leftLists} direction='left' speed='fast' />
      </div>
    </div>
  );
};

export default Skills;
