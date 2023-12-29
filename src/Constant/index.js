import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import web from "../assets/web.png";
import typescript from "../assets/express.png";
import ux from "../assets/ux.png"
import reacr from "../assets/reacr.png";
import git from "../assets/git.png";
import pro1 from "../assets/E-commerce.png"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/pro33.png"

 
 const services = [
   {
     title: "Web Developer",
     icon: web,
   },
   {
     title: "React Developer",
     icon: reacr,
   },
   {
     title: "UI/UX Designer",
      icon: ux,
   },
  
 ];
 
 const technologies = [
   {
     name: "HTML 5",
     icon: html,
   },
   {
     name: "CSS 3",
     icon: css,
   },
   {
    name: "Express.js",
    icon: typescript,
  },
   {
     name: "JavaScript",
     icon: javascript,
   },
  
   {
     name: "React JS",
     icon: reactjs,
   },
  
   {
     name: "Tailwind",
     icon: tailwind,
   },
   {
     name: "Node JS",
     icon: nodejs,
   },
   {
     name: "MongoDB",
     icon: mongodb,
   },
  
   {
     name: "git",
     icon: git,
   },
  
   
 ];
 

 
 const projects = [
   {
     name: "E-commerce website",
     description:
       "E-commerce is online product buying and selling website with and user freindly UI. It is a MERN stack web application",
     tags: [
       {
         name: "Node.js",
         color: "blue-text-gradient",
       },
       {
         name: "React.js",
         color: "green-text-gradient",
       },
       {
        name: "MongoDB",
        color: "pink-text-gradient"
       },
       {
         name: "Express.js",
         color: "blue-text-gradient",
       },
     ],
      image: pro1,
     source_code_link: "https://github.com/amitkhairwal/MERN-Stack-project",
     source_deploy_link:"https://curious-manatee-8bcf01.netlify.app/"
   },
   {
     name: "ToDo App",
     description:
       "Web application that enables users to manage their daily task and to manage the time efficiently ",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "Tailwind",
         color: "green-text-gradient",
       },
       {
         name: "css",
         color: "pink-text-gradient",
       },
     ],
     image: pro2,
     source_code_link: "https://github.com/amitkhairwal/TODOs--Application",
     source_deploy_link:"https://todo-project-context.netlify.app/",
    

   },
   {
     name:"Currency Conversion" ,
     description:
     "A React-based currency conversion project using an API, enabling real-time exchange rate updates and seamless user interaction for conversions. ",
     tags: [
       {
         name: "React js",
         color: "blue-text-gradient",
       },
       {
         name: "Javascript",
         color: "green-text-gradient",
       },
       {
         name: "Tailwind Css",
         color: "pink-text-gradient",
       },
     ],
     image: pro3,
     source_code_link: "https://github.com/amitkhairwal/Currency-Conversion",
     source_deploy_link: "https://currency-conversionbyreact.netlify.app/"


   },
 ];
 export { services, technologies,  projects };