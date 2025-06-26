import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from '../components/Pageheader'
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  { label: "Name", value: "Vivek Kumar" },
  { label: "Age", value: "21" },
  { label: "Address", value: "India" },
  { label: "Email", value: "vivekumar7510@gmail.com" },
  { label: "Contact No", value: "+91 8434287510" },
];

const jobSummary =
  "Seasoned and independent Full Stack Developer with 1 year of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about making Backend as well as Frontend of any websites.";

const About = () => {
  return (
    <section id="about" className="w-full px-5 py-8">
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />

      <div className="flex flex-col md:flex-row gap-20 mt-10 p-8 w-full">
        {/* Personal Info */}
        <div className="w-50% md:w-1/2">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="text-yellow-400 text-[2.5rem] leading-[1.65] pb-5 font-bold">
              A Full Stack Developer & Competitive Programmer
            </h3>
            <p className="text-yellow-sub items-center text-[1.8rem] leading-[1.65] pb-4 border-b  border-yellow-400">
              {jobSummary}
            </p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="text-yellow-400 text-[2rem] font-bold pt-10 mb-10">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i} className="mb-3 leading-[1]">
                  <span className=" text-[1.3rem] leading-[1.65] relative tracking-[0.5px] text-yellow-sub font-bold border-b-2 border-yellow-400 mr-4 pb-5 inline-block">
                    {item.label}
                  </span>
                  <span className="text-[1.2rem] leading-[1.65] relative tracking-[0.5px] text-yellow-sub font-bold  pb-5 inline-block">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        {/* Rotating Services Circle */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="relative rounded-full border-2 border-yellow-400"
              style={{
                width: "350px",
                height: "350px",
                background: "radial-gradient(180px, var(--yellow-theme-main-color), transparent 90%)",
                animation: "rotation 10s linear infinite"
              }}
            >
              <div className="absolute top-[-9%] left-[41%] text-yellow-400">
                <FaDev size={60} />
              </div>
              <div className="absolute right-[-8%] top-[41.5%] text-yellow-400">
                <DiAndroid size={60} />
              </div>
              <div className="absolute bottom-[-10%] left-[41%] text-yellow-400">
                <FaDatabase size={60} />
              </div>
              <div className="absolute left-[-8%] top-[41%] text-yellow-400">
                <DiApple size={60} />
              </div>
            </div>
          </Animate>
        </div>
      </div>

      {/* Custom rotation animation */}
      <style>
        {`
          @keyframes rotation {
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section>
  );
};

export default About;
