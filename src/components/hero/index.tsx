import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";


export default function Hero(){
    const [text] = useTypewriter({
      words: ["Full Stack Web Developer.", "Graphic Designer.", "Financial and Data Enthusiast."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 ml-10 mr-10">
      <div className="flex flex-col gap-5">
        <h4 className=" text-white text-lg font-normal">Welcome to Wonderland!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Theophilus Nuer</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            // cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ffffff"
          />
        </h2>
        <p className=" text-white text-base font-bodyFont leading-6 tracking-wide">
        Results-driven Web Developer with a sales-oriented mindset, leveraging technical expertise to create exceptional user experiences. Strong collaborator with a passion for delivering results.</p>
      </div>
    </div>
  );
}
