import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import avatarImage from '../../assets/bkkg.jpg';

export default function Hero() {
  const [text] = useTypewriter({
    words: ['Full Stack Web Developer.', 'Graphic Designer.', 'Financial and Data Enthusiast.'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full flex py-10 lg:py-0">
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:gap-20">
        <div className="flex flex-col lg:gap-5 lg:ml-10 ml-4"> {/* Added lg:ml-0 for larger screens */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            I'm Theophilus Nuer,
          </h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ffffff" />
          </h2>
          <p className="text-white text-base font-bodyFont leading-6 tracking-wide mt-4 lg:mt-0">
            I am a results-driven Web Developer with a sales-oriented mindset, leveraging technical expertise to create
            exceptional user experiences. Strong collaborator with a passion for delivering results.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 relative flex justify-center items-center">
      <span className="relative animate-bounce flex justify-center h-20 w-20 top-16 right-14">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-gray-400"></span>
      </span>

      </div>
    </div>
  );
}
