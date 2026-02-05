import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  enveu,
  frontdoor,
  projectManagement,
  interviewcoders,
  adminDashboard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Devops Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "DevOps Engineer",
    company_name: "Enveu Technologies",
    icon: enveu,
    iconBg: "#383E56",
    date: "March 2024 - Jan 2026",
    points: [
      "Designed and maintained CI/CD pipelines to automate build, test, and deployment workflows.",
      "Managed cloud infrastructure and application deployments using Docker and container-based solutions.",
      "Monitored system performance, uptime, and logs to ensure high availability and reliability.",
      "Collaborated with development teams to improve deployment processes and reduce release time.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Frontdoor Technologies",
    icon: frontdoor,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Feb 2024",
    points: [
      "Developed and maintained web applications using JavaScript and modern frontend frameworks.",
      "Worked on backend integrations and REST APIs to support application features.",
      "Fixed bugs and optimized application performance based on user and QA feedback.",
      "Participated in code reviews and followed clean code and version control best practices.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Avinash consistently delivered high-quality features and showed strong ownership of Development tasks.",
    name: "Project Manager",
    designation: "Project Manager",
    company: "Enveu Technologies",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "A dependable developer who understands requirements quickly and delivers on time.",
    name: "Senior Engineer",
    designation: "Tech Lead",
    company: "Edvedha Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Avinash played a key role in building dashboards and improving overall system usability.",
    name: "Product Owner",
    designation: "Product Owner",
    company: "Edvedha Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const projects = [
  {
    name: "Interview-Coders",
    description:
      "A full-stack interview preparation platform designed to help candidates practice coding questions, track progress, and prepare effectively for technical interviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb ",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript Tailwindcss ",
        color: "pink-text-gradient",
      },
    ],
    image: interviewcoders,
    source_code_link: "https://interview-coders-1.onrender.com/",
  },
  {
    name: "Project Management Dashboard",
    description:
      "A modern project management dashboard that enables teams to plan, track, and manage projects with task assignments, progress visualization, and role-based access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "AWS EC2, S3, Cognito",
        color: "pink-text-gradient",
      },
    ],
    image: projectManagement,
    source_code_link: "https://github.com/your-username/project-management-dashboard",
  },
  {
    name: "Admin Dashboard",
    description:
      "A scalable admin dashboard for managing users, analytics, and system configurations, featuring authentication, data visualization, and responsive UI design.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "Kanban, JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: adminDashboard,
    source_code_link: "https://github.com/your-username/admin-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
