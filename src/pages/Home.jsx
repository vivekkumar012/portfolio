import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Animate } from "react-simple-animate";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  return (
    <section id='home' className='relative flex justify-center items-center flex-col h-screen'>
      <div className='flex justify-center'>
        <h1 className='text-yellow-400 font-medium text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] leading-tight whitespace-nowrap overflow-hidden animate-typing'
           style={{ animation: "typingEffectAnimation 2.5s steps(20, end)" }} >
          Hello I'm Vivek
          <br />
          Full Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="flex justify-center mt-4">
          <button
            onClick={handleNavigateToContactMePage}
            className="cursor-pointer px-8 py-3 text-2xl font-medium text-yellow-400 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition-colors duration-300"
          >
            Hire Me
          </button>
        </div>
      </Animate>
    </section>
  )
}

export default Home
