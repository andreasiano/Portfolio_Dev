import { useEffect } from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaDribbbleSquare } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactMe() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateX: 0});
    }
  }, [controls, inView]);

  return (
    <motion.div 
    ref={ref}
    className="text-center mb-20" id="contact"
    initial={{ opacity: 0, translateX: -50 }}
    animate={controls}
    transition={{ duration: 0.5 }}>
      <h1 className="text-gradient font-dmdisplay font-semibold mt-20 ss:text-[52px] text-[32px]">
        Let's Connect
      </h1>
      <p className="text-dimWhite xxs:text-xl mb-3 lg:text-2xl">
        Feel free to reach out for any collaborations or just say a friendly hello
      </p>
      <p className="text-gradient xxs:text-xl lg:text-2xl">
        <a href="mailto:andreadevpensieri@gmail.com">andreadevpensieri@gmail.com</a>
      </p>
      <div className="flex flex-row items-center mt-10 justify-center">
        <a href="https://www.facebook.com/andrew.onais.9">
          <BsFacebook className="text-white" size={30} />
        </a>
        <a href="https://www.linkedin.com/in/andrea-siano-023a46243/">
          <BsLinkedin className="text-white xxxs:ml-3 xxs:ml-4 ml-8" size={30} />
        </a>
        <a href="https://dribbble.com/Pensieri90">
          <FaDribbbleSquare className="text-white xxxs:ml-3  xxs:ml-4 ml-8" size={30} />
        </a>
        <a href="https://github.com/andreasiano?tab=repositories">
          <BsGithub className="text-white xxxs:ml-3  xxs:ml-4 ml-8" size={30} />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram className="text-white xxxs:ml-3  xxs:ml-4 ml-8" size={30} />
        </a>
      </div>
    </motion.div>
  );
}
