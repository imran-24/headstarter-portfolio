import { Send } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [text, setText] = useState("");
  const onSubmit = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    window.location.href = `mailto:md.imransyam1956@gmail?body=${text}`
  };

  return (
    <div className=' p-3 flex flex-col  justify-center space-y-2'>
      <h2 className='text-2xl md:text-3xl font-extrabold tracking-wide'>
        Say, <br /> Hello 👋
      </h2>
      <form onSubmit={onSubmit}  className='flex-col flex lg:flex-row space-y-1 items-center justify-between lg:space-x-1'>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          className='max-w-full lg:w-full input'
          placeholder='Click to message'
        />
        <button type="submit"  className='shrink-0  min-h-8 w-8 ml-auto rounded-full hover:bg-indigo-600 bg-indigo-500 flex items-center justify-center'>
          <Send className='text-white size-4' />
        </button>
      </form>
    </div>
  );
};

export default Contact;
