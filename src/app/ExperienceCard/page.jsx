import React from 'react';
import Image from 'next/image';

const ResponsiveComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-b from-blue-50 to-white">
      {/* First Div */}
      <div className="flex flex-col md:flex-row items-center text-[#333333] border-2 border-[#333333] border-solid p-5 md:p-10">
        {/* Text Content */}
        <div className="md:w-1/4 md:order-0 relative">
          <Image
            className="h-auto w-full object-cover rounded-lg"
            src="/arushHero.jpeg"
            alt="Consultancy Banner"
            width={800}
            height={600}
            priority
          />
          <Image
            className="bottom-0 left-0 absolute w-36 transform translate-x-[-1rem] translate-y-[-4rem]"
            src="/vercel.svg"
            alt="Shape"
            width={144}
            height={144}
            priority
          />
        </div>
        <div className="md:w-3/4 md:pr-10 text-center"> {/* Center align text */}
          <p className="text-[#333333] font-medium uppercase bg-white border mx-auto md:w-3/6 rounded-md p-2 mb-4">
            Aarush International Education Limited
          </p>
          <h2 className="text-[#333333] text-4xl font-semibold bg-blue-300 md:w-4/6 mx-auto border rounded-md p-2 hidden md:block mb-6">
            Educational Consultancy in Kathmandu
          </h2>
          <p className="text-lg leading-relaxed mb-6 bg-white md:w-5/6 mx-auto border rounded-md p-2">
            Aarush International Education Limited is an educational consultancy located in Kathmandu, Nepal. They provide valuable services to students aiming to study abroad, including career counseling, university selection, scholarship guidance, financial documentation support, visa application assistance, and test preparation classes such as TOEFL, IELTS, SAT, GRE, and GMAT. They help students navigate the complexities of studying in countries like the US, Australia, Canada, and the UK, ensuring a smoother transition and successful educational journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border-none border p-4 rounded-md hover:bg-[#F0F0F0] transition-colors duration-300">
              <h3 className="text-[#333333] text-2xl font-bold mb-2 border-[#007AFF]">
                Services
              </h3>
              <Image
                src="/Threeservice/consultation.png"
                alt="Image 1"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />

              <p className="text-lg text-center">
                Career Counseling, University Selection, Scholarship Guidance, Visa Assistance, Test Prep
              </p>
            </div>
            <div className="bg-white border-none border p-4 rounded-md hover:bg-[#F0F0F0] transition-colors duration-300">
              <h3 className="text-[#333333] text-2xl font-bold mb-2 border-[#007AFF]">
                Destination Countries
              </h3>
              <Image
                src="/Threeservice/consultation.png"
                alt="Image 2"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />

              <p className="text-lg text-center">US, Australia, Canada, UK</p>
            </div>
            <div className="bg-white border-none border p-4 rounded-md hover:bg-[#F0F0F0] transition-colors duration-300">
              <h3 className="text-[#333333] text-2xl font-bold mb-2 border-[#007AFF]">
                Student Satisfaction
              </h3>
              <Image
                src="/Threeservice/consultation.png"
                alt="Image 3"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />

              <p className="text-lg text-center">
                Ensuring Smooth Transition and Successful Journey
              </p>
            </div>
          </div>
        </div>
        {/* Image */}
      </div>
    </div>
  );
};

export default ResponsiveComponent;
