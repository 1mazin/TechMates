import React from "react";
import Image from "next/image";

const Section = () =>{
    return(
        <>
    <section id="about" class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="font-medium title-font mb-4 text-gray-900 text-3xl">Are you a tech enthusiast?</h2>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base"> Are you passionate about innovation and problem-solving? If so, then you need to join the hackathon and competition community!</p>
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-indigo-700 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Blogs</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-indigo-700 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Hackathons</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-indigo-700 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Community</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-indigo-700 border-opacity-60">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Projects</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
      </div>
    </div>
  </div>
  <div className="container">
  <div class="font-medium title-font mb-4 text-gray-900 text-2xl text-center">The world’s best companies rely on projectss you built using your skills to make better design decisions.</div>
            <div class="logos flex">
            </div>
  </div>
</section>
</>
    )
}

export default Section;