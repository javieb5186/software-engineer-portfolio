import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Hero = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="py-6">I am Jay Bay</p>
            <h1 className="text-5xl font-bold">
              Your <span className='text-info'>Software Engineering</span> Expert
              </h1>
            <p className="py-6">I specialize in getting new or small businesses started with Front End, Back End, and Mobile Applications. Currently, I am freelancing and coming up with solutions for new business owners.</p>
            <p className='py-6'>Connect with me</p>
            <div className='grid grid-cols-2'>
              <div className='flex flex-row justify-around'>
                <div>
                  <a><AiFillLinkedin size={25} /></a>
                </div>
                <div>
                  <a><AiFillGithub size={25}/></a>
                </div>
                <div>
                  <a><AiFillFacebook size={25}/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="card justify-self-center w-full max-w-sm shadow-2xl bg-base-100">
            <img className='object-cover' src='/image-placeholder.jpeg' alt='Hero Image' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;