"use client"
import React from 'react'
import { Link } from 'react-scroll'
import logo from 'app/assets/logo.png'
import Image from 'next/image'
const Header = () => {
  return (
    <>
    <div className="banner bg-indigo-700 text-center text-white title-font font-medium">
            Let's collaborate and build !! 
        </div>
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={logo} class = "w-20 h-18 text-white p-2 rounded-full" />
      <span class="ml-3 text-xl">TechMates</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-4 ">
      <Link activeClass="active" to="Hero" spy={true} smooth={true} offset={50} duration={500} class="mr-5 hover:text-gray-900">Home</Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} class="mr-5 hover:text-gray-900" >About</Link>
      <Link activeClass="active" to="features" spy={true} smooth={true} offset={50} duration={500} class="mr-5 hover:text-gray-900">Features</Link>
      <Link activeClass="active" to="hackathons" spy={true} smooth={true} offset={50} duration={500} class="mr-5 hover:text-gray-900">Hackathons</Link>
      <Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={500} class="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <button class="inline-flex items-center bg-indigo-700 text-white rounded-xl border-0 py-1 px-3 focus:outline-none  hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Get Started
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
</>
  )
}

export default Header