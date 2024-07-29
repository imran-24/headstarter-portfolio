import React from "react";

type Props = {
    title: string; 
    icon: React.ReactNode;
    position: string; 
    handleClick?: ()=> void; 
    otherClasses?: string
}

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: Props) => {
  return (
    <button 
    onClick={handleClick}
    className="relative inline-flex h-12 w-full md:w-60  rounded-[10px] overflow-hidden  p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center rounded-[10px] justify-center  bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
