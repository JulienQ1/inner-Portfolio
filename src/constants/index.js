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
    arduino,
    kicad,
    nodejs,
    opensignal,
    git,
    figma,
    carrent,
    jobit,
    threejs,
    python,
    ift,
    anatomy,
    Esilv,
    iim,
    gb,
    sk,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Works",
      title: "Works",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Motion capture/tracking",
      icon: web,
    },
    {
      title: "unreal engine",
      icon: mobile,
    },
    {
      title: "unity",
      icon: backend,
    },
    {
      title: "Capteur EMG",
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
      name: "python",
      icon: python,
    },
    {
      name: "arduino",
      icon: arduino,
    },
    {
      name: "kicad",
      icon: kicad,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "opensignal",
      icon: opensignal,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    
        {
      title: "ESILV",
      company_name: "Master of Science «Innovation & Creative Technology »",
      icon: Esilv,
      iconBg: "#383E56",
      date: "Septembre 2023 - 2026",
      points: [
        "Augmented Reality, Computer Vision, Motion Capture",
      
      ],
    },
    {
      title: "Instutute for Future Technologies",
      company_name: "Étudiant de recherche dans le domaine de l'apprentissage humain (Human Learning)",
      icon: ift,
      iconBg: "#383E56",
      date: "Septembre 2023 - 2025",
      points: [
        "Spécialisation : « Apprentissage humain » — Interaction homme-machine, génie logiciel",
        
        ,
      
      ],
    },
       {
      title: "institut of internet and multimedia - IIM",
      company_name: "Digital Master Bootcamp",
      icon: iim,
      iconBg: "#383E56",
      date: "Septembre 2022 - 2023",
      points: [
        " UX/UI Design, Motion Design (Adobe Suite), Développement Web, Gestion de Projet",
        
        ,
      
      ],
    },
  ];

 
  
  const projects = [
    {
      name: "2D-EMG-GAME",
      description:
        "Une visualisation 2D interactive du système musculaire humain",
      tags: [
        {
          name: "biomedical",
          color: "blue-text-gradient",
        },
        {
          name: "OpenSignal",
          color: "green-text-gradient",
        },
        {
          name: "Unity",
          color: "pink-text-gradient",
        },
      ],
      image: anatomy,
      source_code_link: "https://github.com/JulienQ1/2D-EMG-GAME",
    },
    {
      name: "IFTendo-Battleship",
      description:
        "Le jeu « Battleship », écrit en C++ dans l'IDE Arduino. Grâce à un hôte et un client, ce jeu se joue à deux. L'hôte est connecté à une matrice LED 8x8 et le client à une matrice de boutons 8x8. Les joueurs peuvent jouer à l'aide des boutons et les LED affichent le résultat de leurs actions.",
        
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "arduino",
          color: "green-text-gradient",
        },
        {
          name: "Kicad",
          color: "pink-text-gradient",
        },
      ],
      image: gb,
      source_code_link: "https://github.com/JulienQ1/IFTendo-Battleship",
    },
    {
      name: "Muscular System Visualization",
      description:
        "Une visualisation 3D interactive du système musculaire humain",
        
      tags: [
        {
          name: "biomedical",
          color: "blue-text-gradient",
        },
        {
          name: "OpenSignal",
          color: "green-text-gradient",
        },
        {
          name: "UnrealEngine",
          color: "pink-text-gradient",
        },
      ],
      image: sk,
      source_code_link: "https://github.com/Z-Anatomy/Unity-app_Z-Anatomy",
    },
    
  ];
  
  export { services, technologies, experiences, projects };
