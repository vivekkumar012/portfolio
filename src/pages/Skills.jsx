import { Line } from "rc-progress";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { skillsData } from "../utils/utils";
import PageHeaderContent from '../components/Pageheader'

const Skills = () => {
  return (
    <section id="skills" className="w-full px-5 py-8">
      <PageHeaderContent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {skillsData.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="relative inline-block text-yellow-main text-[22px] font-bold uppercase tracking-[0.5px] px-2 pb-1 border-b-2 border-yellow-main leading-4 mb-4">
                {item.label}
                {/* Simulating ::before and ::after with span */}
                <span className="absolute left-0 bottom-[-1px] w-[2px] h-[5px] bg-yellow-main"></span>
                <span className="absolute right-0 bottom-[-1px] w-[2px] h-[5px] bg-yellow-main"></span>
              </h3>

              <div className="w-full">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                    key={j}
                  >
                    <div className="pt-[50px]">
                      <p className="text-yellow-sub text-[1.6rem] font-medium uppercase mb-2">
                        {skillItem.skillName}
                      </p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="2"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
