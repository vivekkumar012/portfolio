import React from "react";
import { Link } from "react-router-dom";
import PageHeaderContent from "../components/Pageheader";
import { BiSolidContact } from "react-icons/bi";
import { Animate } from "react-simple-animate";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  
  return (
    <section id="contact" className="py-10 px-4 sm:px-8 md:px-16 text-white">
      <PageHeaderContent
        headerText="Contact me"
        icon={<BiSolidContact size={40} />}
      />

      <div className="mt-8">
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="inline-block text-white border-b-2 border-yellow-500 text-lg font-bold uppercase tracking-wider relative mb-6">
            Let's Talk
            <span className="absolute left-0 -bottom-[2px] w-[2px] h-[5px] bg-yellow-500"></span>
            <span className="absolute right-0 -bottom-[2px] w-[2px] h-[5px] bg-yellow-500"></span>
          </h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form className="mt-8">
            <div className="grid md:grid-cols-2 gap-10 mb-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-2 border-yellow-500 bg-transparent text-white p-4 peer focus:outline-none"
                />
                <label className="absolute left-3 top-2 text-yellow-400 text-base peer-focus:-top-6 peer-focus:text-lg peer-valid:-top-6 peer-valid:text-lg transition-all">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-2 border-yellow-500 bg-transparent text-white p-4 peer focus:outline-none"
                />
                <label className="absolute left-3 top-2 text-yellow-400 text-base peer-focus:-top-6 peer-focus:text-lg peer-valid:-top-6 peer-valid:text-lg transition-all">
                  Email
                </label>
              </div>

              {/* Description */}
              <div className="relative md:col-span-2">
                <textarea
                  name="description"
                  rows="5"
                  required
                  className="w-full border-2 border-yellow-500 bg-transparent text-white p-4 peer focus:outline-none"
                ></textarea>
                <label className="absolute left-3 top-2 text-yellow-400 text-base peer-focus:-top-6 peer-focus:text-lg peer-valid:-top-6 peer-valid:text-lg transition-all">
                  Description
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 px-12 py-3 text-2xl font-medium text-yellow-500 border-2 border-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </Animate>

        <div className="items-center justify-center flex flex-col md:flex-row space-x-4 mt-4">
          <Link to={"https://github.com/vivekkumar012"} className="text-black text-3xl">
            <FaGithub size={30} />
          </Link>
          <Link to={"https://www.linkedin.com/in/vivek-kumar-73601127b/"} className="text-blue-500" >
            <FaLinkedin size={30} />
          </Link>
          <Link to={"https://x.com/i__vivek_07"} className="text-black">
            <FaSquareXTwitter size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
