import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Lottie from "react-lottie";
import MagicButton from "./ui/magic-button";
import { Copy } from "lucide-react";
import animationData from "@/lib/confetti.json";

interface CopyEmailProps {
  description?: string | React.ReactNode;
  copied: boolean;
  handleCopy: () => void;
}

const CopyEmail = ({ copied, description, handleCopy }: CopyEmailProps) => {
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <BackgroundGradientAnimation>
        <div className='mt-5  text-white font-bold px-4 pointer-events-none text-2xl text-center md:text-3xl xl:text-4xl'>
          <p className='bg-clip-text tracking-tighter  text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20'>
            {description}
          </p>
        </div>
      </BackgroundGradientAnimation>

      <div className='mt-20 relative px-8 flex justify-center lg:px-4'>
        {/* button border magic from tailwind css buttons  */}
        {/* add rounded-md h-8 md:h-8, remove rounded-full */}
        {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
        {/* add handleCopy() for the copy the text */}
        <div className={`absolute -bottom-5   ${copied ? "block" : "hidden"}`}>
          {/* <img src="/confetti.gif" alt="confetti" /> */}
          <Lottie options={defaultOptions} height={200} width={400} />
        </div>

        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<Copy className='size-4 mr-2' />}
          position='left'
          handleClick={handleCopy}
          otherClasses='!bg-[#161A31] text-xs'
        />
      </div>
    </>
  );
};

export default CopyEmail;
