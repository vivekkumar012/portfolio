import { Line } from "rc-progress";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { skillsData } from "../utils/utils";
import PageHeaderContent from '../components/Pageheader'

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation();
    const [playAnimation, setPlayAnimation] = useState(false);
  
    useEffect(() => {
      // Trigger animation whenever route is /about
      setPlayAnimation(false);
      const timer = setTimeout(() => setPlayAnimation(true), 10); // delay to re-trigger Animate
      return () => clearTimeout(timer);
    }, [location.pathname]); // runs when route changes

  return (
    <section id="skills" className="w-full px-5 py-8">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {skillsData.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <Animate
              play={playAnimation}
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="relative inline-block text-yellow-main text-[22px] font-bold uppercase tracking-[0.5px] px-5 pb-1 border-solid border-b-2 border-yellow-main leading-4 mb-4">
                {item.label}
                {/* Simulating ::before and ::after with span */}
                <span className="absolute left-0 bottom-[-1px] w-[2px] h-[5px] bg-yellow-main"></span>
                <span className="absolute right-0 bottom-[-1px] w-[2px] h-[5px] bg-yellow-main"></span>
              </h3>

              <div className="w-full">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play={playAnimation}
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
                        strokeWidth="10"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth="15"
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
