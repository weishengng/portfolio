import portfolioImg from "../assets/projects/portfolio.jpg";
import classmateImg from "../assets/projects/classmate_directory.png";
import campusEventImg from "../assets/projects/campus_event_connect.png";


const projects = [
  {
    id: 1,

    title: "Portfolio Website",

    image: portfolioImg,

    featured: true,

    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my experience, projects, certifications, and technical skills.",

    

    features: [
      "Built reusable React components for a consistent UI.",
      "Implemented responsive layouts using Tailwind CSS.",
      "Deployed the website with GitHub Pages."
    ],

    tech: [
      "React",
      "Tailwind CSS",
      "Vite",
      "GitHub Pages"
    ],

    github: "https://github.com/weishengng/portfolio",

    demo: "https://weishengng.github.io/portfolio/",
  },

  {
    id: 2,

    title: "Campus Event Connect",

    image: campusEventImg,

    featured: true,

    description:
      "A fully serverless event management web application built on AWS that allows students to discover campus events, submit RSVPs, and receive real-time updates.",

    features: [
      "Developed a serverless architecture using AWS Amplify, API Gateway, Lambda, DynamoDB, SNS, and CloudWatch.",
      "Built event creation, event listing, and RSVP functionality.",
      "Implemented DynamoDB for persistent event and RSVP storage.",
      "Configured SNS notifications and CloudWatch logging for monitoring.",
      "Designed the application following cloud architecture and AWS best practices."
    ],

    tech: [
      "AWS Amplify",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB",
      "SNS",
      "CloudWatch"
    ],

    github: "#",

    demo: "https://www.youtube.com/watch?v=pWzVnFe8CcQ",

    demoText: "Watch Demo",
  },

  {
    id: 3,

    title: "Tron Classmate Directory with AI",

    image: classmateImg,

    featured: true,

    description:
      "A responsive full-stack web application featuring a searchable classmate directory with an AI-powered assistant and a futuristic Tron-inspired interface.",

    features: [
      "Designed and built a responsive interface for desktop and mobile devices.",
      "Implemented real-time classmate search with dynamic profile rendering.",
      "Integrated an AI chatbot through a Node.js backend.",
      "Protected AI API keys by routing requests through a backend service hosted on Render.",
      "Focused on improving user experience through debugging and responsive design."
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Render",
      "REST API"
    ],

    github: "https://github.com/weishengng/networking",
    demo: "https://weishengng.github.io/networking/",
  },
];

export default projects;