"use client";
import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
export function Cards() {
  return (
    <div className='flex items-center justify-center w-full'>
      <CardStack items={[CARDS[0], CARDS[1]]} />
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


export const CARDS = [
  {
    id: 0,
    name: "Jotion",
    description: "An intuitive task management system with real-time updates.",
    bgImage: "/window.jpg",
    projectImages: ["/jotion/1.png", "/jotion/2.png", "/jotion/3.png", "/jotion/4.png"],
    tech: "Next js, Tailwind, Convex, Clurk Auth",
    href: "https://jotion-roan-three.vercel.app/",
    position:"center",
    github: "https://github.com/imran-24/jotion",
    content: (
      <p>
        <Highlight>Jotion</Highlight> is an intuitive task management system
        with real-time updates.
      </p>
    ),
  },
  {
    id: 1,
    name: "Airbnb Clone",
    description: "A comprehensive clone that mimics Airbnbs functionality.",
    bgImage: "/sea.jpg",
    projectImages:  ["/airbnb/1.png", "/airbnb/2.png", "/airbnb/3.png", "/airbnb/4.png"],
    tech: "Next js, Tailwind, MongoDB, Next Auth",
    href: "https://house-renting-iota.vercel.app/",
    position:"left",
    github: "https://github.com/imran-24/airbnb-clone",
    content: (
      <p>
        <Highlight>Airbnb clone</Highlight> is a comprehensive clone that mimics
        Airbnbs functionality.
      </p>
    ),
  },
  {
      id: 2,
      name: "Formify",
      description: "Created a web application that enables users to design and fill customizable forms, such as quizzes, surveys, and polls, for gathering and analyzing responses.",
      bgImage: "/window.jpg",
      projectImages: ["/formify/1.png", "/formify/2.png", "/formify/3.png", "/formify/4.png"],
      tech: "Next js, Tailwind, Convex, Clurk Auth",
      href: "https://formify-roan-three.vercel.app/",
      position:"left",
      github: "https://github.com/imran-24/formify",
      content: (
        <p>
          <Highlight>Jotion</Highlight> is an intuitive task management system
          with real-time updates.
        </p>
      ),
    },
    {
      id: 3,
      name: "Filestore",
      description: "A website for file management system that enables users to set expiration dates for their uploaded files, mark files as favorites, delete them, and receive reminders when a file is nearing its expiration date.",
      bgImage: "/window.jpg",
      projectImages: ["/filestore/1.png", "/filestore/2.png", "/filestore/3.png", "/filestore/4.png"],
      tech: "React js, Tailwind, Firebase, firebase Auth",
      href: "https://formify-roan-three.vercel.app/",
      position:"left",
      github: "https://github.com/imran-24/firestore",
      content: (
        <p>
          <Highlight>Jotion</Highlight> is an intuitive task management system
          with real-time updates.
        </p>
      ),
    },
];
