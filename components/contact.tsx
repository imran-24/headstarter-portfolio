import { Send } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className=' p-3 flex flex-col  justify-center space-y-2'>
      <h2 className='text-2xl md:text-3xl font-extrabold tracking-wide'>
        Say, <br /> Hello 👋
      </h2>
      <div className='flex-col flex lg:flex-row space-y-1 items-center justify-between lg:space-x-1'>
        <input
          type='text'
          className='max-w-full lg:w-full input'
          placeholder='Click to message'
        />
        <button className='shrink-0  min-h-8 w-8 ml-auto rounded-full hover:bg-indigo-600 bg-indigo-500 flex items-center justify-center'>
          <Send className='text-white size-4' />
        </button>
      </div>
    </div>
  );
};

export default Contact;
