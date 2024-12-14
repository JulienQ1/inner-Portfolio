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
      title: "Muscle Sensor",
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
      title: "Emg-fullbody",
      company_name: "Creative Technologie",
      icon: ift,
      iconBg: "#383E56",
      date: "September 2023 - current",
      points: [
        "Make computer interaction more Healthier",
        "Make the interaction with computer more accessible",
        "Create new way of interact with computer.",
      
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "Muscular System Visualization",
      description:
        "An interactive 3D visualization of the human muscular system",
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
      image: anatomy,
      source_code_link: "https://www.julienquenneville.com",
    },
    
  ];
  
  export { services, technologies, experiences, projects };