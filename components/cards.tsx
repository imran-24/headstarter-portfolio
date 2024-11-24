"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
export function Cards() {
  return (
    <div className='flex items-center justify-center w-full'>
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-2 py-0.5 rounded-xl",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Airbnb Clone",
    description: "A comprehensive clone that mimics Airbnbs functionality.",
    bgImage: "/sea.jpg",
    projectImages:  ["/airbnb/1.png", "/airbnb/2.png", "/airbnb/3.png", "/airbnb/4.png"],
    tech: "Next js, Tailwind, MongoDB, Next Auth",
    href: "https://house-renting-iota.vercel.app/",
    content: (
      <p>
        <Highlight>Airbnb clone</Highlight> is a comprehensive clone that mimics
        Airbnbs functionality.
      </p>
    ),
  },
  {
    id: 1,
    name: "Jotion",
    description: "An intuitive task management system with real-time updates.",
    bgImage: "/window.jpg",
    projectImages: ["/jotion/1.png", "/jotion/2.png", "/jotion/3.png", "/jotion/4.png"],
    tech: "Next js, Tailwind, Convex, Clurk Auth",
    href: "https://jotion-roan-three.vercel.app/",
    content: (
      <p>
        <Highlight>Jotion</Highlight> is an intuitive task management system
        with real-time updates.
      </p>
    ),
  },
  //   {
  //     id: 2,
  //     name: "Tyler Durden",
  //     designation: "Manager Project Mayhem",
  //     content: (
  //       <p>
  //         The first rule of
  //         <Highlight>Fight Club</Highlight> is that you do not talk about fight
  //         club. The second rule of
  //         <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
  //         club.
  //       </p>
  //     ),
  //   },
];
