import React from 'react'

export const About = () => {
  return (
    <div className="flex justify-around my-28">
        <div>
          <h1 className="text-slate-500 text-sm">ABOUT</h1>
        </div>
        <div className="w-[45%]">
          <div className="font-extrabold text-3xl">
            <h1>The best to find the best housing</h1>
            <h1>in your city - we are the best in the market</h1>
          </div>
          <div className="text-xs space-x-16 my-16 text-slate-500 flex justify-between">
            <p>
              Whether you are looking for a cozy apartment in the city or a
              sprawling estate in the countryside, we are here to guide you every
              step of the way.
            </p>
            <p>
              We pride ourselves on our commitment to excellence and our
              personalized approach to client service. When you work with us,
              you can trust that we will go above and beyond to make sure you are
              completely satisfied with your real estate experience.
            </p>
          </div>
        </div>
      </div>
  )
}
