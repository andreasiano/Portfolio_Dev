import { useEffect } from "react";
import { imgData } from "../constants";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ImageCards() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, translateX: 0, translateY: 0 });
    }
  }, [controls, inView]);

  return (
    <div id="works" className="grid md:grid-cols-2 gap-10" ref={ref}>
      {imgData.map((item, i) => (
        <a key={item.id} href={item.link}>
          <motion.div
            className="shadow-xl font-dmdisplay relative overflow-hidden rounded-xl group"
            initial={{ opacity: 0, translateX: -50, translateY: -50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: i * 0.6 }}
          >
            <img
              className="transition-transform group-hover:scale-110 duration-1000 object-contain"
              src={item.img}
              alt={item.title}
            />
            <div className="absolute lg:mt-1 sm:mt-5 lg:mx-4 p-4 text-slate-900 inset-0 flex flex-col items-start">
              <h1 className="lg:text-[40px] lg:leading-[50px] md:text-[35px] sm:leading-[60px] md:leading-[40px] xs:text-[50px] sm:text-[50px] xxs:text-3xl xxxs:text-[20px] xxs:mb-4 md:mb-0 font-bold">
                {item.title}
              </h1>
              <p className="max-w-[500px] md:text-[20px] xxxs:text-[10px] font-semibold xs:text-[25px] lg:text-xl sm:text-3xl xxs:text-[16px] sm:mb-5 sm:mt-5 lg:mb-5 xxs:mb-2">
                {item.description}
              </p>
              <button
                type="button"
                className="inline-flex font-extrabold md:text-[20px] xs:text-[25px] sm:text-3xl items-center lg:text-xl"
              >
                {item.button}
                <a href={item.link} className="ml-3">
                  {item.icon}
                </a>
              </button>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}