import React from "react";

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
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Delivering high-quality, personalized education.</li>
            <li>Utilizing advanced technologies such as AI and VR to enhance learning experiences.</li>
            <li>Making education accessible and affordable for everyone.</li>
            <li>Fostering a community of lifelong learners.</li>
          </ul>
        </p>
      </div>
      <div className="w-full h-screen 0 flex items-center justify-center">
        <div className="w-[30vw] h-[35vw]  ">
          <div className="w-[10vw] h-[10vw] bg-red-900 rounded-full m-7 ml-[10vw]">
            <img src="MohitBhaiya.png " alt="Mohit" />
          </div>
          <div className="flex items-center justify-center">
          <h1 className="text-[3vw] font-[Poppins] bg-be-900 font-medium">Mohit Dubey</h1>
          
          </div>
          <div className="flex items-center justify-center text-[2vw] font-[Poppins] font-medium"><h2>CEO LEPSES</h2></div>
        <div className="text-xl  font-[Gloriant]">
          <p>Mohit Dubey is the visionary CEO of Lepses, an innovative EdTech startup transforming the educational landscape. With a profound passion for learning and technology, Mohit has dedicated his career to bridging the gap between traditional education methods and the rapidly evolving tech-driven world.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
