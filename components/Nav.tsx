"use client"
import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <div>
      <nav className="absolute top-3 left-32 w-full p-4 flex justify-self-stretch items-center bg-black bg-opacity-0 z-10">
        <div className="text-white font-bold text-3xl mr-20">Estate</div>
        <div className="flex space-x-14 mr-80">
          <Link href="/" className="text-white hover:text-white cursor-pointer relative">
            <span className="custom-hover">Home</span>
          </Link>
          <Link href="/Price" className="text-white hover:text-white cursor-pointer relative">
            <span className="custom-hover">Pricing</span>
          </Link>
          <Link href="/Aboutus" className="text-white hover:text-white cursor-pointer relative">
            <span className="custom-hover">About us</span>
          </Link>
          <Link href="/FAQ" className="text-white hover:text-white cursor-pointer relative">
            <span className="custom-hover">FAQ</span>
          </Link>
        </div>
        <Link href='/Contactus'>
        <button className="bg-transparent border border-white text-white py-2 px-4 rounded cursor-pointer">Contact</button>
        </Link>
      </nav>

      <style jsx>{`
        .custom-hover {
          position: relative;
          display: inline-block;
        }
        .custom-hover::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px; /* Adjust thickness */
          background-color: currentColor;
          bottom: -1rem; /* Position 1rem below text */
          left: 0;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        .custom-hover:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
};
