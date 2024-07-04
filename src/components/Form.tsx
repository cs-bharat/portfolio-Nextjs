"use client"
import React from 'react'
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import "bootstrap/dist/css/bootstrap.min.css";

function Form () {
  return (
    <>
        <form className="m-8 flex flex-col flex-wrap md:max-w-4xl ">
        <div className="mb-3 flex flex-col">
            <label className="form-label">Name</label>
            <input type="text" className="form-control text-black p-3 text-2xl rounded-md outline-none" id="exampleInputname1" aria-describedby="nameHelp"/>
            <div id="nameHelp" className="form-text ">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3  flex flex-col">
            <label  className="form-label">Mobile Number</label>
            <input type="number" className="form-control text-black p-3  text-2xl rounded-md outline-none" id="exampleInputnumber1"/>
        </div>

        <div className="mb-3  flex flex-col">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control  text-black p-3  text-2xl rounded-md outline-none" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>

        
        <button type="submit" className="btn btn-primary text-2xl rounded-md bg-[#00EAFF] p-3 ">Submit</button>
        </form>
        {/* <BackgroundBeams/> */}
    </>
  )
}

export default Form
