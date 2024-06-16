import React from "react";
import MohitBhaiya from '../Utils/MohitBhaiya.jpg'; // adjust the path based on your project structure

function About() {
  return (
    <div className="w-full min-h-screen bg-zinc-300 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-semibold font-[Poppins] text-center my-6 text-blue-900">About Lepses</h1>
        <p className="text-lg font-[Poppins] text-gray-800 leading-relaxed max-w-3xl mx-auto my-4 text-justify">
          Lepses is an innovative EdTech startup dedicated to revolutionizing the way education is delivered and experienced. Our mission is to bridge the gap between traditional education methods and the dynamic, tech-driven world we live in today. By leveraging cutting-edge technology and a passion for learning, we aim to create an engaging, accessible, and effective educational environment for learners of all ages.
        </p>
        
        <h1 className="text-4xl font-semibold font-[Poppins] text-center my-6 text-blue-900">Our Vision</h1>
        <p className="text-lg font-[Poppins] text-gray-800 leading-relaxed max-w-3xl mx-auto my-4 text-justify">
          At Lepses, we envision a world where education is not confined by geographical boundaries, socioeconomic status, or conventional methodologies. We strive to empower learners with the tools and resources they need to succeed in an ever-evolving global landscape.
        </p>
        
        <h1 className="text-4xl font-semibold font-[Poppins] text-center my-6 text-blue-900">Our Mission</h1>
        <p className="text-lg font-[Poppins] text-gray-800 leading-relaxed max-w-3xl mx-auto my-4 text-justify">
          Our mission is to provide a comprehensive and immersive learning experience that combines the best of technology and pedagogy. We are committed to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-lg font-[Poppins] text-gray-800 leading-relaxed max-w-3xl mx-auto my-4 text-justify">
          <li>Delivering high-quality, personalized education.</li>
          <li>Utilizing advanced technologies such as AI and VR to enhance learning experiences.</li>
          <li>Making education accessible and affordable for everyone.</li>
          <li>Fostering a community of lifelong learners.</li>
        </ul>
      </div>
      <div className="w-full h-auto flex items-center justify-center mt-12">
        <div className="w-[30vw] h-auto flex flex-col items-center bg-white p-8 shadow-lg rounded-lg">
          <div className="w-[10vw] h-[10vw] bg-red-900 rounded-full mb-7 overflow-hidden">
            <img  src={MohitBhaiya} alt="Mohit" className="w-full h-full object-cover mt-0.5" />
          </div>
          <h1 className="text-3xl font-[Gloriant] text-blue-900 font-medium">Mohit Dubey</h1>
          <h2 className="text-2xl font-[Poppins] text-gray-700 font-medium">CEO LEPSES</h2>
          <p className="text-lg font-[Gloriant] text-gray-800 mt-4 text-center">
            Mohit Dubey is the visionary CEO of Lepses, an innovative EdTech startup transforming the educational landscape. With a profound passion for learning and technology, Mohit has dedicated his career to bridging the gap between traditional education methods and the rapidly evolving tech-driven world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
