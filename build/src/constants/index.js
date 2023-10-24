import {
  ethical_hacking,
  backend,
  greenit,
  web,
  javascript,
  wordpress,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  git,
  php,
  webflow,
  C,
  coda,
  scse,
  carrent,
  jobit,
  tripguide,
  threejs,
  mari,
  maxime,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Etudes",
  },
  {
    id: "contact",
    title: "Me contacter",
  },
];

const services = [
  {
    title: "Développeur Frontend",
    icon: web,
  },
  {
    title: "Hackeur Ethique",
    icon: ethical_hacking,
  },
  {
    title: "Expert en GreenIT",
    icon: greenit,
  },
  {
    title: "Développeur Backend",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "Webflow",
    icon: webflow,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
];

const experiences = [
  {
    title:
      "Baccalauréat sciences et technologies de l'industrie et du développement durable (STI2D)",
    company_name: "Lycée Sainte Croix Saint Euverte",
    icon: scse,
    iconBg: "#383E56",
    date: "Sept 2021 - Juin 2023",
    points: [
      "Je travaillais beaucoup sur l'informatique, le réseau et au language de programmation C.",
      "De mon côté, je me suis beaucoup intéressé à plusieurs languages de programmation hors de celui enseigné au lycée tels que Javascript ou Python.",
    ],
  },
  {
    title: "Bachelor Concepteur Développeur d'Applications",
    company_name: "Coda",
    icon: coda,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Aujourd'hui",
    points: [
      "Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité.",
      "Concevoir et développer la persistance des données en intégrant les recommandations de sécurité.",
      "Concevoir et développer une application multicouche répartie en intégrant les recommandations de sécurité.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Raphaël a un esprit curieux et une bonne autonomie dans le travail ce qui lui permet d'aborder efficacement de nouvelles problématiques. Il est organisé, appliqué et communique très bien.",
    name: "Mari Doucet",
    designation: "Professeur",
    company: "Coda",
    image: mari,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Maxime Girardin",
    designation: "Ingénieur réseau",
    company: "Servier",
    image: maxime,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Coda",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Raxuis",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
