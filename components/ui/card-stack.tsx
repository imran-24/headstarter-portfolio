"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Overlay from "../overlay";
import { ProjectModal } from "../modals/project-modal";

let interval: any;

type Card = {
  id: number;
  name: string;
  description: string;
  href: string,
  content: React.ReactNode;
  bgImage: string;
  tech: string;
  projectImages: string[];
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className='relative  h-[21.5rem] w-full '>
      {cards.map((card, index) => {
        return (
          <ProjectModal project={card}  key={card.id}>
          <div  className="group">
            <Overlay />

            <motion.div
            
            className='absolute dark:bg-black bg-white h-[21.5rem] w-full  rounded-3xl p-4 shadow-md  overflow-hidden dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col space-y-2  justify-center'
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <Image
              src={card.bgImage}
              fill
              className='object-center object-cover -z-10'
              alt=''
            />
            <div className='z-50 font-normal text-white dark:text-neutral-200'>
              {card.content}
            </div>
            <div className='mx-auto'>
              <Image
                src={card.projectImages[0]}
                width={500}
                height={500}
                alt='linear demo image'
                className='object-contain rounded-2xl'
              />
            </div>

            {/* <div>
              <p className='text-neutral-500 font-medium dark:text-white'>
                {card.name}
              </p>
              <p className='text-neutral-400 font-normal dark:text-neutral-200'>
                {card.designation}
              </p>
            </div> */}
          </motion.div>
          </div>
          </ProjectModal>
        );
      })}
    </div>
  );
};
