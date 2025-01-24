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
    text: "main library: react, react-toastify, values.js",
    description:
      "A React color generator app allowing users to input a color and generate 10 tints and 10 shades, offering a visually engaging and intuitive way to explore color variations.",
  },
  {
    id: nanoid(),
    img: "unsplash-images.png",
    url: "https://search-image-small.vercel.app/",
    github: "https://github.com/adityapatidar31/search-image-small",
    title: "Search unsplash Images",
    text: "Main Library: react, axios, tanstack-query",
    description:
      "A React-based image search app enabling users to find images by name. It fetches 10 images from Unsplash using Axios, ensures efficient state management with TanStack Query, and offers a seamless, responsive interface for a smooth user experience.",
  },
  {
    id: nanoid(),
    img: "cocktail-compass.png",
    url: "https://cocktail-compass.vercel.app/",
    github: "https://github.com/adityapatidar31/cocktail-compass-react",
    title: "Cocktail Compass",
    text: "Main Library: react, axios, tanstack-query, react-router-dom",
    description:
      "A React cocktail search app with a user-friendly search feature, leveraging Axios, React Router, TanStack Query, React Toastify, and Styled Components for efficient API handling, routing, notifications, and styling.",
  },
  {
    id: nanoid(),
    img: "store.png",
    url: "https://store-nextjs-14-blush.vercel.app/",
    github: "https://github.com/adityapatidar31/store-nextjs-14",
    title: "Store",
    text: "Main Library: next-js, tailwind, typescript, zod, use-debounce",
    description:
      "Store is a sleek e-commerce app built with Next.js, Tailwind CSS, and TypeScript. It delivers seamless shopping experiences, modern UI, fast performance, and robust functionality for users and businesses alike.",
  },
  {
    id: nanoid(),
    img: "stay-booker.png",
    url: "https://stay-booker.vercel.app/",
    github: "https://github.com/adityapatidar31/stay-booker-next-js-14/",
    title: "Stay-booker",
    text: "Main Library: next-js, tailwind, typescript, leaflet, prisma",
    description:
      "Stay-Booker is a Next.js-based app to book rooms. It uses Prisma, Leaflet, and Tailwind, offering seamless property booking with advanced category filtering for a tailored user experience.",
  },
];
