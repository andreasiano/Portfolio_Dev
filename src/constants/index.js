import img1 from '../assets/Blog.webp'
import img2 from '../assets/Sorrentino.webp'
import img3 from '../assets/Siepelunga.webp'
import img4 from '../assets/Siepelunga.png'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const imgData = [
         {
           id: 1,
           title: "East Asian Blog",
           img: img1,
           description:
             "This is a personal project based on my passion for East Asian Cultures. It is a Blog built with React and Bootstrap.",
           button: "See Project",
           link: "https://east-asian-blog.netlify.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 2,
           title: "Travel App",
           img: img4,
           description:
             "A Travel Mobile App Prototype focused on simplifying travel planning.",
           button: "View Case Study",
           link:
             "A Travel Mobile App Prototype focused on simplifying travel planning.",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 3,
           title: "Siepelunga24",
           img: img3,
           description:
             "A Cigar Club Website based in Bologna built with HTML and CSS",
           button: "View Case Study",
           link:
             "https://siepelunga24.netlify.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
         {
           id: 4,
           title: "Photography Project",
           img: img2,
           description:
             "This project is a photography portfolio built with HTML, Bootstrap and JavaScript.",
           button: "See Project",
           link: "https://sorrentinoportfolio.netlify.app/",
           icon: <BsFillArrowRightCircleFill />,
         },
       ];

