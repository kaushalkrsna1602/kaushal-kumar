import project1 from "../assets/projects/loquax.svg";
import project2 from "../assets/projects/BiteRush.svg";
import project3 from "../assets/logo.png";
import project4 from "../assets/projects/chat-bot.png";
import project5 from "../assets/projects/project5.PNG";

export const HERO_CONTENT = `I am a Full-Stack Developer passionate about crafting seamless, high-performance web applications. With expertise in React, Redux, Node.js, Express, MongoDB, and JavaScript, I specialize in building intuitive user interfaces and robust backend systems. Whether it's developing scalable applications, integrating APIs, or optimizing performance, I thrive on solving complex challenges with clean, efficient code.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "April 2023 - July 2024",
    role: "Senior Video Editor",
    company: "Ekcel Academy",
    description: `Led a creative team of video editors, designers, and content writers at Ekcel Academy, producing 400+ high-retention videos including shorts, reels, and marketing content. Played a key role in boosting audience engagement, contributing to a 30% increase in viewer retention through strategic editing and compelling visual storytelling.`,
    technologies: ["Premiere Pro", "After Effects", "Gen AI"],
  }
];

export const PROJECTS = [
  {
    title: "Precisium AI",
    image: project5, 
    description:
      "Precisium AI is a smart PDF summarizer that leverages GenAI to convert long PDF documents into concise, structured summaries. Built for speed and clarity, it supports secure uploads, personalized summaries, and a sleek modern UI.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "LangChain",
      "Gemini API",
      "uploadthing",
      "Clerk Auth",
      "NeonDB"
    ],
    link: "https://precisium-ai.vercel.app/"
  },
  {
    title: "Loquax",
    image: project1,
    description:
      "Loquax is a real-time chatting web application designed with a clean UI and smooth user experience. It supports instant messaging, active user tracking, and dynamic chat rooms.",
    technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
    link: "https://loquax.onrender.com/signup"
  },
  {
    title: "Bite Rush",
    image: project2,
    description:
      "Bite Rush is a food delivery web app built with React and Redux. It features real-time restaurant listings, dynamic menus, and a smooth cart experience—designed for speed and usability.",
    technologies: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    link: "https://bite-rush.onrender.com/"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "Framer"],
    link: "/#"
  },
  {
    title: "Deep Bot",
    image: project4,
    description:
      "Deep Bot is an AI-powered chatbot built with Gemini API, enabling smart, human-like conversations. Designed for speed and accuracy, it delivers seamless user interactions across various queries.",
    technologies: ["HTML", "CSS", "JavaScript", "Gemini Api"],
    link: "https://kaushalkrsna1602.github.io/Deep-Bot-A-Gemini-Chat-bot/"
  },
];

export const CONTACT = {
  address: "New Delhi,  Delhi 110042",
  phoneNo: "+91 7461 8104 64 ",
  email: "kaushal.kr.kr@gmail.com",
};
