import React from 'react'
import InputForm from '@/components/Form'
// import { BackgroundBeams } from "@/components/ui/background-beams";


function page() {
  return (
    <div className='w-full py-12 pt-40 md:pt-30 mx-auto flex flex-wrap flex-col justify-center items-center'>
          <h1 className='text-4xl md:text-7xl text-center font-sans font-extrabold mb-4 
      text-white mt-3 text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400'>Contact</h1>
      <p className='text-xl md:text-4xl text-center  mb-4
      text-[#ADB5BD] mt-1 font-medium tracking-wide '>Drop me a message🚀</p>
      <p className='text-center text-lg text-[#6C757D] '>Ready to elevate your online presence? Contact me below for questions, consultations, or to start your project. Let's achieve your business goals together.</p>
      <div className='md:max-w-4xl'>

           <InputForm/>
      </div>
           {/* <BackgroundBeams/> */}
    </div>
  )
}

export default page
