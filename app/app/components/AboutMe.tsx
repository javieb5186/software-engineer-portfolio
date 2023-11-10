import React from 'react'

const AboutMe = () => {
  return (
    <section>
      <div className="min-h-screen bg-base-200">
        <div className="grid grid-cols-2">
          <div className="card justify-self-center w-full max-w-sm shadow-2xl bg-base-100">
              <img className='object-cover' src='/image-placeholder.jpeg' alt='Hero Image' />
            </div>
          <div className="text-center lg:text-left flex flex-col justify-between">
            <h1 className="text-5xl font-bold">
               About Me
            </h1>
            <p className="py-6">
              I was first introduced to programming in 2017 through Game Development and have enjoyed it since then. Up until 
              April of 2023, I was self taught. Then I was introduced to Full Stack Development Bootcamps where I eagerly and 
              immediately enrolled. I passed with flying colors and mentored a few developers who were new to the industry. Now 
              I am doing any type of development to learn, improve, and have fun in this industry. 
            </p>
            <div className='grid grid-cols-3'>
              <div>
                <h3 className='text-3xl'>100+</h3>
                <h5>Completed Projects</h5>
              </div>
              <div>
                <h3 className='text-3xl'>5+</h3>
                <h5>Years Experience</h5>
              </div>
              <div>
                <h3 className='text-3xl'>20+</h3>
                <h5>Repeat Customers</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;