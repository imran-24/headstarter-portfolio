import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'


type Props = {}

const Grid = (props: Props) => {
  return (
    <BentoGrid className="w-full md:max-w-7xl mx-auto">
      {gridItems.map(({id, title, description, className, img, imgClassName, spareImg, titleClassName}) => (
        <BentoGridItem
          id={id}
          key={id}
          title={title}
          description={description}
          className={className}
          img={img}
          imgClassName={imgClassName}
          spareImg={spareImg}
          titleClassName={titleClassName}
        />
      ))}
    </BentoGrid>
  );
}

export default Grid;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "col-span-2 sm:col-span-3 row-span-4 justify-start",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end bottom-0 ",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "border-none col-span-2 sm:col-span-6 row-span-4   ",
    imgClassName: "",
    titleClassName: "sm:text-center top-0",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Thinking",
    description: "I constantly try to improve",
    className: " sm:col-span-2 row-span-2",
    imgClassName: "",
    titleClassName: "justify-center top-0 bottom-0",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: " sm:col-span-3 row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "The Inside Scoop",
    className: "col-span-2 sm:col-span-4  row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center top-0 bottom-0 md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "",
    description: "Do you want to start a project together?",
    className: "col-span-2 sm:col-span-3 row-span-2 rounded-b-none",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "Thinking",
    description: "I constantly try to improve",
    className: " sm:col-span-3 row-span-2",
    imgClassName: "",
    titleClassName: "justify-center top-0 bottom-0",
    img: "",
    spareImg: "",
  },
  {
    id: 8,
    title: "Resume",
    description: "",
    className: "sm:col-span-3 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 9,
    title: "Socials",
    description: "",
    className: "sm:col-span-3 sm:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full text-center",
    img: "",
    spareImg: "",
  },
];

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
  },
];