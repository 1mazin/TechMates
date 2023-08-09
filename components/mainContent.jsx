"use client"
import React from 'react'
import Image from 'next/image'
import image from 'app/assets/main-section.jpg'
import { useRouter } from 'next/navigation'

const maincontent = () => {
  const router = useRouter() 
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Image src={image} width={720} height={600} />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">One stop place to find a dream team
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Connect, Collaborate, Conquer.Find like-minded peers for hackathons and competitions in the tech world. Unleash innovation together!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={() => router.push('/Signin')}>Sign in </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={() => router.push('/Signup')}> Don't have an account?Create Now</button>
      </div>
    </div>
  </div>
</section>
  )
}
export default maincontent;