"use client" ;

import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
    {
      text: "Bharat",
    },
    {
      text: "Prajapati",
    },
    {
      text: "Full",
    },
    {
      text: "-stack",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-[#f2e9e4]",
    },
  ];

function HeroSection() {
    return (
        <div className="h-screen md:h-[45rem] flex justify-center items-center
      rounded-md py-10 md:py-0 relative mx-auto flex-col overflow-hidden">

           {/* Spotlight effect */}
             <Spotlight
               className="-top-40 left-0 md:left-60 md:-top-40"
               fill="white"
              />

            <div className="text-center w-full relative z-10 p-4">
                <h1
                    className="mt-20 md:mt-0 text-5xl font-bold text-center
                     bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    <TypewriterEffectSmooth words={words} />
                    {/* Bharat Prajapati Full stack Developer  */}
                </h1>
                

                <p 
                  className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx-auto max-w-lg">I am a student of  Computer engineering😊 , Studying at SSIU . I am very much interested in technology✌️ and learning new technology & skills.🚀.I am passionate about technology and have
                  hands-on experience in building JavaScript projects and full-stack applications.🧑‍💻
                </p>
                <div className="mt-4">
                    <Link href={"https://github.com/cs-bharat"}>
                    
                    {/* HeroSection Button */}
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-[#00b9bc] text-white dark:text-black
                    border-neutral-200 dark:hover:bg-teal-300"
                    >
                        GitHub Link
                    </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default HeroSection
