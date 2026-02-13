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
  TheRegiment,
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
    title: "Software Developer",
    company_name: "The Regiment",
    icon: TheRegiment,
    iconBg: "#E6DEDD",
    date: "DEC 2024 - AUG 2025",
    points: [
      "Built and deployed scalable full-stack applications using React.js, Next.js, Node.js, and Express.js, improving application performance by 30% through optimized architecture and API handling.",
      "Designed and integrated RESTful APIs with PostgreSQL and MongoDB, reducing query latency by 25% via indexing and database optimization.",
      "Implemented secure authentication and authorization using JWT and RBAC, enhancing system security and reducing access vulnerabilities by 40%.",
      "Improved frontend performance using code splitting, lazy loading, and state optimization, decreasing page load time by 35% and increasing user engagement by 20%..",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Enveu Technologies",
    icon: enveu,
    iconBg: "#383E56",
    date: "AUG 2024 - NOV 2025",
    points: [
      "Designed and developed scalable full-stack applications using React.js, Next.js, Node.js, and Express.js, improving application performance by 30% and delivering high-quality features in agile sprints.",
      "Built and optimized RESTful APIs integrated with PostgreSQL and MongoDB, reducing response time by 25% through query optimization, indexing, and efficient data modeling.",
      "Implemented secure authentication and authorization using JWT and Role-Based Access Control (RBAC), enhancing platform security and ensuring robust user management.",
      "Contributed to production deployments on AWS, utilizing Docker and CI/CD pipelines to ensure reliable releases, high availability (99.9% uptime), and smooth feature rollouts.",
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
    source_code_link: "https://master.drq8xlj1li9h3.amplifyapp.com/",
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
    source_code_link: "https://master.d24tu9zmu59bpl.amplifyapp.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
