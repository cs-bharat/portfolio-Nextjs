import React from 'react'

function Footer() {
  return (
    // bg-[#26292f]
  <footer className=" bg-[#212529] text-gray-200 flex-col md:flex-row py-12 flex flex-wrap justify-evenly w-full " >
   
        <div className='max-w-6xl mx-auto'>
             <div className='sm:m-10'>
                <p className='bg-gradient-to-b from-neutral-300 to-neutral-700 bg-clip-text text-transparent md:text-9xl text-4xl font-serif font-extrabold  '>Bharat Kumar</p>
             </div>
             <div className='mt-10 sm:m-10 sm:text-md'>
             {/* text-blue-200 */}
                <p className="text-lg  text-[#CED4DA]">© 2023-2024 | BHARAT PRAJAPATI  WEB - All Rights Reserved</p>
             </div>
        </div>

        <div className=" mx-auto mt-5">
              <div className="flex flex-wrap justify-center items-center tracking-widest gap-4">
                   <a href="https://github.com/cs-bharat" className="hover:scale-105 hover:origin-bottom" >
                     <img className="w-12" src="/SocialImage/github.png" alt="github img" />
                   </a>
                   <a href="https://www.linkedin.com/in/bharat41web/" className="hover:scale-105 hover:origin-bottom">
                     <img className="w-12" src="/SocialImage/linkdin.png" alt="linkdin" />
                   </a>
                   <a href="https://twitter.com/bharat41_web" className="hover:scale-105 hover:origin-bottom">
                     <img className="w-10" src="/SocialImage/twitter.png" alt="twitter" />
                   </a>
                   <a href="" className="hover:scale-105 hover:origin-bottom">
                     <img className="w-16" src="/SocialImage/youtube.png" alt="youtube" />
                   </a>

              </div>
        </div>

    </footer>
  )
}

export default Footer
