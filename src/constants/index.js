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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Manager",
    company_name: "Shubhlaxmi Indane - Indian Oil",
    icon: null, // Replace with appropriate icon if available
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Oversaw monthly on-time delivery to 23,000+ customers, maintaining a 98% success rate.",
      "Digitized daily transactional processes, improving operational efficiency by 60% and setting a new benchmark for on-time delivery in Ahmedabad.",
    ],
  },
  {
    title: "Researcher",
    company_name: "ISRO - Indian Space Research Organization",
    icon: null, // Replace with appropriate icon if available
    iconBg: "#E6DEDD",
    date: "Jan 2024 - June 2024",
    points: [
      "Designed interactive visualizations for Oceanography data using advanced tools, improving analytical insights by 25%.",
      "Developed and trained AI algorithms and machine learning models, streamlining data processing workflows by 30%.",
      "Utilized Colab and ISRO-specific tools for efficient data preprocessing, cleaning, and transformation into usable products.",
    ],
  },
  {
    title: "Researcher",
    company_name: "Laurentian University",
    icon: null, // Replace with appropriate icon if available
    iconBg: "#383E56",
    date: "June 2023 - Aug 2023",
    points: [
      "Developed a live hand gesture recognition model using a Python library and trained database.",
      "Improved machine learning model accuracy by 30% through a newly developed algorithm.",
    ],
  },
  {
    title: "Team Lead",
    company_name: "Dicot",
    icon: null, // Replace with appropriate icon if available
    iconBg: "#E6DEDD",
    date: "Nov 2021 - May 2022",
    points: [
      "Deployed a deep learning model in production, enabling real-time predictions in a web application.",
      "Developed a Flutter web application with a responsive user interface, resulting in a 40% increase in user engagement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Friend",
    description:
      "Web application featuring an AI-powered virtual avatar that personalizes interactions by learning user preferences and adapting to roles such as friend, therapist, and assistant.",
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
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "AI Extension",
    description:
      "Chrome extension that automatically detects and corrects spelling and grammatical mistakes in text typed on web pages, with optional paraphrasing using OpenAI's GPT.",
    tags: [
      {
        name: "chrome-extension",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Jinideals",
    description:
      "Affiliate marketing platform integrating e-commerce APIs for real-time product comparison, with web scraping for automated data retrieval and a responsive UI.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "AI Autonomous Drone",
    description:
      "Integrated AI library using Arduino and Raspberry Pi Pico to enable autonomous flight with obstacle detection for cars and humans.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "raspberry-pi",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "HigherOut India",
    description:
      "Freelancer hiring platform built with Node.js and React, featuring RESTful APIs for project management and secure payment processing.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Gifter App",
    description:
      "Automated gift management system integrating APIs for event tracking, personalized reminders, and e-commerce for seamless purchasing and delivery.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "api-integration",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Meal Planner App",
    description:
      "Personalized meal planning system using Java and Firebase, integrating APIs for dietary preference-based recipe suggestions.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "SEO-Python",
    description:
      "Automated content generation and SEO optimization tool utilizing web scraping and GPT-based text generation to improve website traffic.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "seo",
        color: "green-text-gradient",
      },
      {
        name: "gpt",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "AI Glass",
    description:
      "AI-powered glasses designed to aid visually impaired individuals by providing real-time audio descriptions of objects in their surroundings.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "assistive-tech",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Trading Up",
    description:
      "Automated trading platform integrating APIs from major exchanges to execute trading strategies with real-time dashboards and risk management features.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "websockets",
        color: "green-text-gradient",
      },
      {
        name: "trading",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Hand Recognition",
    description:
      "Python-based hand recognition model for real-time sign language and finger pointer detection using machine learning techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
  {
    name: "Second Innings",
    description:
      "All-in-one app for elderly individuals in assisted care homes, providing easy access to poems, medical services, and social features.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "ui/ux",
        color: "green-text-gradient",
      },
      {
        name: "assistive-tech",
        color: "pink-text-gradient",
      },
    ],
    image: null, // Replace with appropriate image
    source_code_link: "https://github.com/", // Placeholder
  },
];

export { services, technologies, experiences, testimonials, projects };
