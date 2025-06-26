import React from "react";
import PageHeaderContent from "../components/Pageheader";
import { IoBookSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { data } from "../utils/ResumeUtils/utils";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen px-5 py-10">
      <PageHeaderContent
        headerText="My Resume"
        icon={<IoBookSharp size={40} />}
      />

      <div className="flex flex-col md:flex-row w-full gap-10">
        {/* Experience Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-10 mt-8">
          <h3 className="text-[22px] font-bold uppercase border-b-2 border-yellow-400 text-white px-3 relative before:content-[''] before:w-[2px] before:h-[5px] before:bg-yellow-400 before:absolute before:bottom-[-1px] before:left-0 after:content-[''] after:w-[2px] after:h-[5px] after:bg-yellow-400 after:absolute after:bottom-[-1px] after:right-0">
            Experience
          </h3>

          <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                contentArrowStyle={{ display: "none" }}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <h4 className="text-base text-yellow-300">{item.subTitle}</h4>
                  
                </div>
                <p className="text-[18px] text-white">{item.description}</p>
                <h4 className="text-base text-blue-500 mt-4">{item.duration}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Education Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-10 mt-8">
          <h3 className="text-[22px] font-bold uppercase border-b-2 border-yellow-400 text-white px-3 relative before:content-[''] before:w-[2px] before:h-[5px] before:bg-yellow-400 before:absolute before:bottom-[-1px] before:left-0 after:content-[''] after:w-[2px] after:h-[5px] after:bg-yellow-400 after:absolute after:bottom-[-1px] after:right-0">
            Education
          </h3>

          <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
            
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                contentArrowStyle={{ display: "none" }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <h4 className="text-base text-yellow-300">{item.subTitle}</h4>
                  
                </div>
                <p className="text-[18px] text-white">{item.description}</p>
                <h4 className="text-base text-blue-500 mt-4">{item.duration}</h4>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
