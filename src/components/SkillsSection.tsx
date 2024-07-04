"use client"
import Link from 'next/link'
import React from 'react'
import SkilssDatas from '../data/SkilssData.json';
import { BackgroundGradient } from "./ui/background-gradient";

// custom dataType defined //
interface skillsDataType{
            id : number,
            skillsIn: string,
            required : string,
            isFeatured : boolean,
            description : string
     }

function SkillsSection(){

    const skillsALL  = SkilssDatas.Skilss.filter((Skilss:skillsDataType) => Skilss.isFeatured);

  return (
    <div className="py-12 bg-gray-900 w-full">
        <div>
            <div className="text-center">
                <h2 className="text-teal-600 uppercase font-semibold tracking-wide text-base">Featured Skills</h2>
                <p className="text-3xl tracking-tight mt-2 leading-8  font-extrabold
                 sm:text-5xl text-white"> Learn with chai or code </p>
            </div>
        </div>

        <div className='mt-10'>
           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {skillsALL.map((Skilss:skillsDataType) => (
                <div key={Skilss.id} className="flex justify-center">
                    <BackgroundGradient className="flex flex-col rounded-[22px] 
                    bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                      <div className="p-4 sm:p-4 flex flex-col items-center text-center flex-grow"
                      >
                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 
                         dark:text-neutral-200">{Skilss.skillsIn}</p>
                        <p className="text-xl sm:text-sm text-black mb-3 
                         dark:text-neutral-500">{Skilss.required}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400  flex-grow">{Skilss.description}</p>
                      </div>

                  </BackgroundGradient>
                </div>
            ))}


           </div>
        </div>

        <div className="mt-20 text-center">
            <Link href={"/skills"} className="px-4 py-2 text-xl rounded border border-neutral-600
            text-neutral-200 bg-[#00b9bc] hover:bg-[#078587] transition duration-200 ">
            View All skilss
            </Link>
        </div>
        
    </div>
  )
}

export default SkillsSection