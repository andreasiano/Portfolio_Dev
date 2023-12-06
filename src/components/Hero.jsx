import React from 'react'
import styles from '../style';
import portrait from "../assets/myimage-2.webp";


const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row xxs:gap-8 lg:gap-20 flex-col ${styles.paddingY}`}
    >
      <div className={`flex-2 ${styles.flexStart} flex-col`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 mt-5 font-dmdisplay font-semibold ss:text-[52px] lg:text-[42px] text-white ss:leading-[60.8px] leading-[55px]">
            Building <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital Products</span>,{" "}
          </h1>
        </div>
        <h1 className="font-semibold font-dmdisplay ss:text-[52px] lg:text-[42px] text-white ss:leading-[60.8px] leading-[55px] w-full">
          Coding and More...
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] sm:text-2xl xxs:text-xl lg:text-2xl mt-5`}
        >
          I am{" "}
          <span className="text-gradient font-bold">Andrea S. Pensieri</span>, a
          Front End Developer with two years of experience. 
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} pb-6 md:my-0 my-10 relative`}
      >
        <img
          src={portrait}
          alt="portrait"
          className="w-full h-full rounded-xl xxs:mb-30 relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero