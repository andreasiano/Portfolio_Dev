import React from 'react'
import { useState } from 'react'
import { navLinks } from "../constants";
import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = "scroll";
    }
  }
  return (
    <motion.div 
    className="flex py-6 justify-between items-center navbar"
    initial={{ opacity: 0, translateY: -50 }}
    animate={{opacity: 1, translateY: 0}}
    transition={{ duration: 0.5 }}
    >
      <h1 className="lg:text-xl cursor-pointer xxs:text-[20px] text-white font-bold tracking-tighter">
        ANDREA PENSIERI
      </h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`text-dimWhite transition duration-500 hover:text-blue-200 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-5"
            } text-[15px] cursor-pointer`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden z-40 cursor-pointer w-full flex flex-1 justify-end items-center">
        {nav ? (
          <AiOutlineClose
            onClick={handleNav}
            className="z-40 text-white"
            size={50}
          />
          ) : (
          <BiMenuAltRight
            onClick={handleNav}
            className="z-40 text-white"
            size={50}
          />
        )}
        <div
          className={
            nav
              ? "fixed text-gray-300 left-0 top-0 w-full h-screen bg-black-gradient px-4 py-7 flex-col"
              : "hidden"
          }
        >
          <ul className="flex flex-col fixed top-0 left-0 w-full h-full items-center justify-center">
            {navLinks.map((nav, index) => (
              <li className="font-bold text-3xl p-5" key={nav.id}>
                <a onClick={handleNav} href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
