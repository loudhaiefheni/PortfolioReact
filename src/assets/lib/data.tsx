import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { GoHome, GoMail, GoPerson, GoProject, GoStack } from "react-icons/go";
import adobexdicon from "../../assets/icons/adobexdicon.svg";
import angularicon from "../../assets/icons/angularicon.svg";
import ansibleicon from "../../assets/icons/ansibleicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import caricon from "../../assets/icons/car-icon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import gitlabicon from "../../assets/icons/gitlabicon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import jenkinsicon from "../../assets/icons/jenkinsicon.svg";
import kubernetesicon from "../../assets/icons/kubernetesicon.svg";
import linuxicon from "../../assets/icons/linuxicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import mysqlicon from "../../assets/icons/mysqlicon.svg";
import nestjsicon from "../../assets/icons/nestjsicon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import springbooticon from "../../assets/icons/springbooticon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import profilepicture from "../img/bg-image-heni-sopra.jpeg";

export const headerIntroData = {
  title: {
    fr: "Bonjour, Je suis Heni LOUDHAIEF",
    en: "Hi, I'm Heni LOUDHAIEF",
  },
  subtitle: {
    fr: "Ingénieur DevOps | Développeur Fullstack",
    en: "DevOps Engineer | Full Stack Developer",
  },
  description: {
    fr: "Je suis Heni LOUDHAIEF, un ingénieur DevOps et développeur fullstack basé à Paris. Fort d'une expérience significative acquise lors de mes précédents stages, je suis passionné par le DevOps et le web. Je cherche à relever de nouveaux défis, à mettre à profit mes compétences et à contribuer à des projets ambitieux. Ensemble, concrétisons des solutions numériques innovantes et performantes !",
    en: "I am Heni LOUDHAIEF, a creative DevOps engineer and fullstack developer based in Paris. With significant experience in fullstack development gained during my internships, I am deeply passionate about DevOps and web development. I am excited to embrace new challenges, apply my skills, and contribute to impactful projects. Together, let's create innovative and high-performing digital solutions!",
  },
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Développeur Web Full Stack",
    title_EN: "Full Stack Web Developer",
    company: "Sopra Steria x Orange",
    date: {
      fr: "Mars 2024 - Septembre 2024",
      en: "March 2024 - September 2024",
    },
    description: [
      "Développé des composants back-end et front-end (Next.js, NestJS, React, Node.js) sur deux portails PaaS.",
      "Implémenté plus de 25 fonctionnalités, corrigé plus de 10 bugs, et automatisé plusieurs processus administratifs.",
      "Créé des scripts pour la gestion des bases de données, le déploiement GitLab, et l’envoi automatique de notifications.",
      "Mis en œuvre des pipelines CI/CD avec Jenkins, et utilisé Docker, Kubernetes et Ansible pour l’automatisation et le déploiement.",
      "Participé à la rédaction et à l’exécution de tests fonctionnels afin de valider les nouvelles fonctionnalités avant leur mise en production.",
      "Utilisé Jira pour le suivi des anomalies et la collaboration entre développeurs et testeurs.",
      "Animé des cérémonies agiles (Scrum, SAFe) et contribué aux démonstrations client.",
    ],
    description_EN: [
      "Developed back-end and front-end components (Next.js, NestJS, React, Node.js) across two PaaS portals.",
      "Implemented over 25 features, fixed more than 10 bugs, and automated several administrative processes.",
      "Created scripts for database management, GitLab deployment, and automatic notifications.",
      "Implemented CI/CD pipelines using Jenkins, and utilized Docker, Kubernetes, and Ansible for automation and deployment.",
      "Participated in writing and executing functional tests to validate new features before production release.",
      "Used Jira for issue tracking and collaboration between developers and testers.",
      "Facilitated agile ceremonies (Scrum, SAFe) and contributed to client demonstrations.",
    ],
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "REST Api", icon: apiicon },
      { name: "Figma", icon: figmaicon },
      { name: "Canva", icon: canvaicon },
      { name: "Next.js", icon: nextjsicon },
      { name: "Nest.js", icon: nestjsicon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Jenkins", icon: jenkinsicon },
      { name: "Docker", icon: dockericon },
      { name: "Kubernetes", icon: kubernetesicon },
      { name: "Ansible", icon: ansibleicon },
      { name: "GitLab", icon: gitlabicon },
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Développeur Web Full Stack",
    title_EN: "Full Stack Developer",
    company: "LEAD WIRE",
    date: {
      fr: "Mai 2023 - Juillet 2023",
      en: "May 2023 - July 2023",
    },
    description: [
      "Conception et développement d'une application de commerce électronique Full Stack avec Angular et Spring Boot, offrant une expérience utilisateur fluide.",
      "Création d'un panier d'achat et traitement sécurisé des paiements par carte de crédit via l'API Stripe, garantissant la confiance des utilisateurs.",
      "Utilisation efficace d'une base de données MySQL pour le stockage des données, assurant une gestion optimale des informations.",
      "Optimisation des performances de l'application pour une navigation rapide et une expérience utilisateur fluide, améliorant la satisfaction des clients.",
    ],
    description_EN: [
      "Designed and developed a full-stack e-commerce application using Angular and Spring Boot, providing a seamless user experience.",
      "Implemented a shopping cart and secure credit card payment processing via the Stripe API, ensuring user trust.",
      "Efficiently utilized a MySQL database for data storage, ensuring optimal information management.",
      "Optimized application performance for fast navigation and a smooth user experience, enhancing customer satisfaction.",
    ],
    technologies: [
      { name: "Angular", icon: angularicon },
      { name: "Spring Boot", icon: springbooticon },
      { name: "MySQL", icon: mysqlicon },
      { name: "HTML5", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Stagiaire DevOps",
    title_EN: "DevOps Intern",
    company: "ATTIJARIWAFA BANK",
    date: {
      fr: "Juin 2022 - Août 2022",
      en: "June 2022 - August 2022",
    },
    description: [
      "Participation à la mise en œuvre de pipelines CI/CD avec Jenkins, incluant des étapes d'intégration et de déploiement automatisé.",
      "Conteneurisation d’applications avec Docker, création d'images personnalisées et gestion des registres Docker pour les environnements de développement et de test.",
      "Contribution à l’orchestration d’applications à l’aide de Kubernetes, notamment via la configuration de fichiers YAML pour les déploiements, services, et secrets.",
      "Écriture de playbooks Ansible pour automatiser la configuration des serveurs et les déploiements applicatifs sur différents environnements.",
      "Collaboration avec l'équipe technique pour résoudre des problèmes liés aux déploiements et à la gestion des environnements.",
    ],
    description_EN: [
      "Contributed to the implementation of CI/CD pipelines with Jenkins, including automated integration and deployment stages.",
      "Containerized applications using Docker, created custom images, and managed Docker registries for development and testing environments.",
      "Orchestrated applications using Kubernetes, including YAML configuration for deployments, services, and secrets.",
      "Wrote Ansible playbooks to automate server configuration and application deployment across various environments.",
      "Collaborated with the technical team to resolve issues related to deployments and environment management.",
    ],
    technologies: [
      { name: "Jenkins", icon: jenkinsicon },
      { name: "Docker", icon: dockericon },
      { name: "Kubernetes", icon: kubernetesicon },
      { name: "Ansible", icon: ansibleicon },
      { name: "Linux", icon: linuxicon },
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Développeur Full Stack en Alternance",
    title_EN: "Full Stack Developer Apprenticeship",
    company: "ARAB SOFT",
    date: {
      fr: "Septembre 2018 - Juin 2021",
      en: "September 2018 - June 2021",
    },
    description: [
      "Développé des composants front-end React/Node.js pour un système de gestion de stocks et de clients.",
      "Contribué aux décisions techniques et aux revues de code au sein d'une équipe de 10 personnes.",
      "Implémenté des fonctionnalités en suivant les méthodologies Agile/Scrum.",
      "Participé à la rédaction et à l’exécution de scénarios de tests manuels à partir des user stories.",
      "Utilisé Jira et Xray pour le suivi des anomalies et la gestion des campagnes de tests.",
      "Rédigé des scénarios BDD avec Cucumber (Given / When / Then) pour valider les nouvelles fonctionnalités.",
    ],
    description_EN: [
      "Developed front-end components using React and Node.js for a stock and client management system.",
      "Contributed to technical decisions and code reviews within a 10-person development team.",
      "Implemented features following Agile/Scrum methodologies.",
      "Participated in writing and executing manual test scenarios based on user stories.",
      "Used Jira and Xray for issue tracking and test campaign management.",
      "Wrote BDD scenarios with Cucumber (Given / When / Then) to validate new features.",
    ],
    technologies: [
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "HTML5", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "GitLab", icon: gitlabicon },
    ],
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#D9A5B5",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    fr: "Pour plus de détails, veuillez consulter mon CV et mon profil LinkedIn",
    en: "For more details, please refer to my CV and LinkedIn profile",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataDevOps = [
  {
    skillsTitle: "DevOps",
    skills: [
      {
        title: "Docker",
        hash: "#Docker",
        icon: dockericon,
        color: "#2496ED",
      },
      {
        title: "Ansible",
        hash: "#Ansible",
        icon: ansibleicon,
        color: "#000000",
      },
      {
        title: "Kubernetes",
        hash: "#Kubernetes",
        icon: kubernetesicon,
        color: "#326CE5",
      },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { fr: "Accueil", en: "Home", hash: "#home", icon: GoHome },
  { fr: "Compétences", en: "Skills", hash: "#skills", icon: GoStack },
  { fr: "Expériences", en: "Experiences", hash: "#projects", icon: GoProject },
  { fr: "À propos de moi", en: "About me", hash: "#about-me", icon: GoPerson },
  { fr: "Contact", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  {
    fr: "© 2025 Heni LOUDHAIEF | Tous droits réservés",
    en: "© 2025 Heni LOUDHAIEF | All Rights Reserved",
    hash: "#",
    data: null, // No specific component for this
  },
] as const;

export const sideBarRightMail = {
  link: "mailto:loudhaiefheni74@gmail.com",
  text: "loudhaiefheni74@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/loudhaiefheni/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/loudhaiefheni",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:loudhaiefheni74@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
  {
    link: "https://pdfelementcloud.wondershare.com/share/review/2AqwIMcbdxpceAVKpwzlr0s0XhqZ4V-L-4UNXxh4HN9LvQB4bqjiF6TGunExpF0hF1ogs-1MdB8Nd1olB_4-TLaEf6d9Bt-3D5g9yGZp7Tk",
    icon: FiFileText,
    altimgname: "cv",
  },
] as const;

export const quotesData = [
  {
    fr: `"Il n'est pas du tout important de réussir du premier coup. Ce qui compte vraiment, c'est de réussir au dernier moment."`,
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    fr: `"Le web est comme une toile, et le code est la peinture. Créez votre chef-d'œuvre."`,
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "À propos de moi",
  title_EN: "About me",
  description: "Quelques extraits de code à propos de moi",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Les circuits de mon cœur",
      description:
        "Lorsque je ne suis pas dans le monde numérique, je parcours le fascinant univers de la technologie et du matériel. Les circuits et les soudures sont pour moi comme des pièces de puzzle d'une aventure excitante.",
      icon: hardwareicon,
    },
    {
      title: "Sur la voie rapide de la vie",
      description:
        "En dehors du code, j'aime me retrouver sur la voie rapide – au sens propre. Les voitures sont ma passion, et j'apprécie de rouler sur des routes inconnues au volant de machines puissantes.",
      icon: caricon,
    },
    {
      title: "La curiosité comme devise de vie",
      description:
        "Mon parcours de développeur web n'est qu'une partie de mon chemin de vie. Je vis selon la devise que l'aventure commence vraiment lorsque l'on laisse derrière soi ce qui est familier. Découvrir de nouveaux endroits est ma forme d'inspiration créative.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    fr: "Contact",
    en: "Contact",
  },
  description: {
    fr: "Veuillez m'envoyer un message, et je vous répondrai dans les plus brefs délais.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        fr: "Nom",
        en: "Name",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer votre nom",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        fr: "E-mail",
        en: "E-mail",
      },
      type: "email",
      validation: {
        fr: "Veuillez entrer votre email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        fr: "Sujet",
        en: "Subject",
      },
      type: "text",
      validation: {
        fr: "Veuillez entrer un sujet",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      fr: "Message",
      en: "Message",
    },
    name: "message",
    rows: 10,
    validation: {
      fr: "Veuillez entrer votre message",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      fr: "Envoyer",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      fr: "Je consens à ce que Heni LOUDHAIEF utilise mes données personnelles (nom et adresse e-mail) pour me contacter.",
      en: "I agree that Heni LOUDHAIEF may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      fr: "En soumettant cette demande, vous confirmez avoir lu la politique de confidentialité.",
      en: "By submitting this request, you acknowledge that you have read the Private Policy.",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    fr: "🦄 La démo en direct va s'ouvrir sous peu. Serveurs en cours de démarrage...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    fr: "🦄 Merci pour votre email. Je reviendrai vers vous dès que possible.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible.",
  },
  failedEmailSent: {
    fr: "🦄 Malheureusement, l'envoi de votre e-mail a échoué. Veuillez réessayer plus tard.",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later.",
  },
  failedValidationName: {
    fr: "Veuillez entrer votre nom",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    fr: "FR",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
