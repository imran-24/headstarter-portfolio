"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Overlay from "../overlay";
import { ProjectModal } from "../modals/project-modal";

let flippingInterval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  description: string;
  href: string;
  content: React.ReactNode;
  bgImage: string;
  tech: string;
  projectImages: string[];
};

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset;
  const SCALE_FACTOR = scaleFactor;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => {
      if (flippingInterval) clearInterval(flippingInterval);
    };
  }, [items]);

  const startFlipping = () => {
    flippingInterval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards.unshift(newCards.pop()!); // Rotate the last card to the top
        return newCards;
      });
    }, 3000); // Flip every 3 seconds
  };

  return (
    <div className="relative h-[21.5rem] w-full">
      {cards.map((card, index) => (
        // <ProjectModal project={card} >
          <div key={card.id}  className="group">
            {/* <Overlay /> */}
            <motion.div
              className="absolute dark:bg-black bg-white h-[21.5rem] w-full rounded-3xl p-4 shadow-md overflow-hidden dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col space-y-2 justify-center"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // Reduce size for cards behind
                zIndex: cards.length - index, // Adjust z-index based on position
              }}
              transition={{
                duration: 0.5, // Smooth animation
              }}
            >
              <Image
                src={card.bgImage}
                fill
                className="object-center object-cover -z-10"
                alt={`Background of ${card.name}`}
              />
              <div className="z-50 font-normal text-white dark:text-neutral-200">
                {card.content}
              </div>
              <div className="mx-auto">
                <Image
                  src={card.projectImages[0]}
                  width={500}
                  height={500}
                  alt={`Preview of ${card.name}`}
                  className="object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        // </ProjectModal>
      ))}
    </div>
  );
};
