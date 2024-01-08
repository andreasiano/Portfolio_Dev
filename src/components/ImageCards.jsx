import { imgData } from "../constants";
import { motion } from 'framer-motion'

const animationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index
    }
  }),
}

export default function ImageCards() {
  return (
    <div id="works" className="grid md:grid-cols-2 gap-10">
      {imgData.map((card, index) => (
        <a key={card.id} href={card.link}>
          <motion.div
            className="shadow-xl font-dmdisplay relative overflow-hidden rounded-xl group"
            key={index}
            variants={animationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true
            }}
            custom={index}
          >
            <img
              className="transition-transform group-hover:scale-110 duration-1000 object-contain"
              src={card.img}
              alt={card.title}
            />
            <div className="absolute lg:mt-1 sm:mt-5 lg:mx-4 p-4 text-slate-900 inset-0 flex flex-col items-start">
              <h1 className="lg:text-[40px] lg:leading-[50px] md:text-[35px] sm:leading-[60px] md:leading-[40px] xs:text-[50px] sm:text-[50px] xxs:text-3xl xxxs:text-[20px] xxs:mb-4 md:mb-0 font-bold">
                {card.title}
              </h1>
              <p className="max-w-[500px] md:text-[20px] xxxs:text-[10px] font-semibold xs:text-[25px] lg:text-xl sm:text-3xl xxs:text-[16px] sm:mb-5 sm:mt-5 lg:mb-5 xxs:mb-2">
                {card.description}
              </p>
              <button
                type="button"
                className="inline-flex font-extrabold md:text-[20px] xs:text-[25px] sm:text-3xl items-center lg:text-xl"
              >
                {card.button}
                <a href={card.link} className="ml-3">
                  {card.icon}
                </a>
              </button>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
}