import { nanoid } from "nanoid";
import {
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in TypeScript, enhancing JavaScript applications with strong typing for improved reliability and maintainability.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: "Expert in Next.js, creating fast and SEO-friendly server-side rendered web applications with advanced routing capabilities.",
  },
  {
    id: nanoid(),
    title: "Express",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Express, building robust and scalable backend APIs with Node.js for diverse web applications.",
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in MongoDB, utilizing its flexible NoSQL database capabilities to design efficient and scalable data models.",
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in MySQL, designing and optimizing relational database schemas for efficient and reliable data management.",
  },
  {
    id: nanoid(),
    title: "PostgreSQL",
    icon: <SiPostgresql className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in PostgreSQL, designing and maintaining relational databases with advanced querying and optimization techniques.",
  },

  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Strong foundation in Java, developing robust object-oriented applications with a focus on maintainability and scalability.",
  },
  {
    id: nanoid(),
    title: "Spring Boot",
    icon: <SiSpringboot className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Spring Boot, building production-ready microservices and enterprise-level applications with ease.",
  },

  {
    id: nanoid(),
    title: "C++",
    icon: <SiCplusplus className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in C++, writing high-performance applications and systems with a focus on efficient algorithms and memory management.",
  },

  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitAlt className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Git, efficiently managing codebases and collaborating in team environments using version control systems.",
  },
  {
    id: nanoid(),
    title: "Linux",
    icon: <FaLinux className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Linux, with hands-on experience managing servers, scripting, and optimizing system performance.",
  },
  {
    id: nanoid(),
    title: "Redis",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Redis, leveraging its in-memory data structures for high-performance caching and database solutions.",
  },
  {
    id: nanoid(),
    title: "Docker",
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Docker, containerizing applications to ensure consistent environments across development and production.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "color-generator.png",
    url: "https://color-generator-small-react.vercel.app/",
    github: "https://github.com/adityapatidar31/color-generator-small-react/",
    title: "Color Generator",
    text: "main library: react, react-toastify, values.js \n Description: A React app that generates 10 tints and 10 shades of any input color, providing an intuitive color exploration experience.",
  },
  {
    id: nanoid(),
    img: "unsplash-images.png",
    url: "https://search-image-small.vercel.app/",
    github: "https://github.com/adityapatidar31/search-image-small",
    title: "Search unsplash Images",
    text: "Main Library: react, axios, tanstack-query \n Description: An image search React app using Axios and TanStack Query, fetching 10 images from Unsplash based on the entered name.",
  },
  {
    id: nanoid(),
    img: "cocktail-compass.png",
    url: "https://cocktail-compass.vercel.app/",
    github: "https://github.com/adityapatidar31/cocktail-compass-react",
    title: "Cocktail Compass",
    text: "Main Library: react, axios, tanstack-query, react-router-dom Description: A React-based cocktail search app offering an intuitive search feature to explore cocktails. Built with Axios for API requests, React Router for navigation, TanStack Query for state management, React Toastify for notifications, and Styled Components for elegant styling.",
  },
];
