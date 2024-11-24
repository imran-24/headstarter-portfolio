import Image from "next/image";
import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <div className='flex items-start px-4 space-x-4'>
      <div>
        <Image
          src={"/image.jpeg"}
          height={50}
          width={50}
          className='object-cover object-center  shrink-0  rounded-xl overflow-hidden  aspect-square '
          alt=''
        />
      </div>
      <Link
        target='black'
        href={
          "https://drive.google.com/file/d/11mfKQOcYX7mSqT0Ipje5JfflhGMr3pV4/view?usp=drive_link"
        }
        className=''
      >
        <p>Resume</p>
        <p className='text-xs text-neutral-500'>resume.com</p>
      </Link>
    </div>
  );
};

export default Resume;
