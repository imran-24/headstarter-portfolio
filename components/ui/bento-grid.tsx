"use client";

import { cn } from "@/lib/utils";
import { Copy, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import animationData from "@/lib/confetti.json";
import MagicButton from "./magic-button";
import Lottie from "react-lottie";
import { InfiniteMovingCards } from "./infinite-moving-cards";

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
        "grid auto-rows-[5.4rem] grid-cols-2 sm:grid-cols-8 gap-2 w-full mx-auto ",
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

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
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
        <div className="p-6 relative flex flex-col space-y-6  ">

          <div className="space-y-4">
            <div>
              <Image
              src={"/logo.png"}
              height={30}
              width={40}
              className="object-center border  p-1 rounded-lg  aspect-square  object-cover"
              alt=""
            />
            </div>
            <p className="text-sm">
              I have some news to share. I am now a <span className="text-emerald-500 font-bold">
                <Link href={"https://headstarter.co/"} className="underline underline-offset-2 und">Headstarter</Link> Software
              Engineering fellow</span>. I will be building 5 AI projects in 5
              weeks
            </p>
          </div>
          <div className="relative aspect-[2/1]">
            <Image
            src={"/track-a.png"}
            fill
            className="object-center rounded-3xl  aspect-square  object-cover"
            alt=""
          />
          </div>
        </div>
      )}
      {id === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[11.3rem] gap-2">
          <div className="relative overflow-hidden col-span-1 row-span-1 md:row-span-2 border rounded-3xl group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none ">
            <Image
              src={"/sea.jpg"}
              fill
              className="object-center object-cover"
              alt=""
            />
            <Link target="blank" href="https://house-renting-iota.vercel.app/">
            <Image
              src={"/airbnb.png"}
              fill
              className="object-left-top md:pt-24 md:pl-10 lg:pt-32  lg:pl-16 md:scale-125 lg:scale-150  hover:scale-105 transition duration-200 ease-in-out  object-cover"
              alt=""
            />
            </Link>
            
          </div>
          <div className="hidden md:block  md:relative overflow-hidden col-span-1 row-span-1 border rounded-3xl group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none ">
            {/* <Image
              src={"/track-a.png"}
              fill
              className="object-left-top aspect-square  scale-105  object-cover"
              alt=""
            /> */}
          </div>
          <div className=" relative overflow-hidden col-span-1 row-span-` border rounded-3xl group/bento hover:shadow-sm cursor-pointer transition duration-200 shadow-input dark:shadow-none ">
            <Image
              src={"/window.jpg"}
              fill
              className="object-center object-cover"
              alt=""
            />
            <Link target="blank" href="https://jotion-roan-three.vercel.app/">
            <Image
              src={"/notion.png"}
              fill
              className="object-left-top md:px-4 md:py-6 hover:scale-105 md:hover:scale-125 transition duration-200 ease-in-out  object-cover"
              alt=""
            />
            </Link>
            
          </div>
        </div>
      )}
      {/* {title !== "" && <p className=" px-4 text-lg">{title}</p>} */}
      {/* 4 */}
      {id === 4 && (
        <div className=" p-3 flex flex-col  justify-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            Say, <br /> Hello 👋
          </h2>
          <div className="flex-col md:flex space-y-1  items-center justify-between">
            <input
              type="text"
              className="max-w-full input"
              placeholder="Click to message"
            />
            <button className="min-h-8 w-8 ml-auto rounded-full hover:bg-indigo-600 bg-indigo-500 flex items-center justify-center">
              <Send className="text-white size-4" />
            </button>
          </div>
        </div>
      )}
      {id === 5 && (
        // <div className="flex items-center justify-center gap-1 lg:gap-5 w-full ">
        //   <div className="  flex flex-col gap-3 md:gap-3 lg:gap-8">
        //       {leftLists.map((item, i) => (
        //         <span
        //           key={i}
        //           className="lg:py-4 lg:px-3 py-2 px-3 text-sm lg:text-base
        //           lg:opacity-100 rounded-lg text-center "
        //         >
        //           {item}
        //         </span>
        //       ))}
        //       <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        //     </div>
        //     <div className=" flex flex-col gap-3 md:gap-3 lg:gap-8">
        //       <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
        //       {rightLists.map((item, i) => (
        //         <span
        //           key={i}
        //           className="lg:py-4 lg:px-3 py-2 px-3 text-sm lg:text-base
        //           lg:opacity-100 rounded-lg text-center "
        //         >
        //           {item}
        //         </span>
        //       ))}
        //     </div>
        // </div>
        <div className="">
          <div className="rounded-md flex flex-col antialiased bg-white  items-center justify-center relative overflow-hidden ">
            <InfiniteMovingCards
              items={rightLists}
              direction="right"
              speed="fast"
            />
            <InfiniteMovingCards
              items={leftLists}
              direction="left"
              speed="fast"
            />
          </div>
        </div>
      )}
      {id == 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-center justify-center space-y-2  text-white font-bold px-4 pointer-events-none text-2xl text-center md:text-3xl xl:text-4xl">
            <p className="bg-clip-text tracking-tighter  text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              {description}
            </p>
            <div className=" relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-8 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<Copy className="size-4 mr-2" />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] text-xs"
              />
            </div>
          </div>
        </BackgroundGradientAnimation>
      )}
      {id === 7 && (
        <div className="flex items-start px-4 space-x-4">
          <div>
            <Image
              src={"/image.jpeg"}
              height={50}
              width={50}
              className="object-cover object-center  shrink-0  rounded-xl overflow-hidden  aspect-square "
              alt=""
            />
          </div>
          <Link
            target="black"
            href={
              "https://drive.google.com/drive/folders/1kcA-yTuePM5Gcfq_dZSMCiLRBnHrrr3K?usp=sharing"
            }
            className=""
          >
            <p>Resume</p>
            <p className="text-xs text-neutral-500">resume.com</p>
          </Link>
        </div>
      )}
      {id === 8 && (
        <div className="flex items-center justify-end  px-4 space-x-2">
          <Link target="blank" href={"https://web.facebook.com/imran.syam.56/"} className="relative  h-8 w-8">
            <Image
              src={"/fb.webp"}
              fill
              className="object-cover object-center shrink-0 "
              alt=""
            />
          </Link>
          <Link target="blank" href={"https://www.instagram.com/_imran_syam_/?hl=en"} className="relative  h-8 w-8 ">
            <Image
              src={"/instagram.svg"}
              fill
              className="object-cover object-center shrink-0 "
              alt=""
            />
          </Link>
          <Link target="blank" href={"/"} className="relative  h-8 w-8">
            <Image
              src={"/discord.webp"}
              fill
              className="object-cover object-center shrink-0"
              alt=""
            />
          </Link>
          <Link target="blank" href={"https://www.linkedin.com/in/imran-syam-b8b216217/"} className="relative  h-8 w-8">
            <Image
              src={"/linkedin.webp"}
              fill
              className="object-cover object-center shrink-0"
              alt=""
            />
          </Link>
          <Link target="blank" href={"https://github.com/imran-24"} className="relative  h-8 w-8">
            <Image
              src={"/github.webp"}
              fill
              className="object-cover object-center shrink-0"
              alt=""
            />
          </Link>
          <Link target="blank" href={"https://twitter.com/ImranSyam169132"} className="relative scale-125 h-8 w-8">
            <Image
              src={"/twitter.webp"}
              fill
              className="object-cover object-center shrink-0 rounded-md"
              alt=""
            />
          </Link>
        </div>
      )}
    </div>
  );
};
