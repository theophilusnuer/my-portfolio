import css from "../../assets/CSS3.svg";
import html from "../../assets/HTML5.svg";
import javascript from "../../assets/JavaScript.svg";
import tailwind from "../../assets/Tailwind CSS.svg";
import material from "../../assets/Material UI.svg";
import node from "../../assets/Node.js.svg";
import react from "../../assets/React.svg";
import bootstrap from "../../assets/Bootstrap.svg";
import express from "../../assets/Express.svg";
import mongo from "../../assets/MongoDB.svg";
import figma from "../../assets/Figma.svg";
import jira from "../../assets/Jira.svg";

const techskills: any = [
    {
        name: "React.js",
        src: react,
        style: " shadow-lg shadow-sky-600"
    },
    {
        name: "Javascript",
        src: javascript,
        style: "shadow-lg shadow-yellow-500"
    },
    {
        name: "Express.js",
        src: express,
        style: "shadow-lg shadow-gray-300"
    },
    {
        name: "MongoDb",
        src: mongo,
        style: "shadow-lg shadow-green-700"
    },
    {
        name: "CSS",
        src: css,
        style: "shadow-lg shadow-blue-500"
    },
    {
        name: "HTML",
        src: html,
        style: "shadow-lg shadow-orange-500"
    },
    {
        name: "Tailwind",
        src: tailwind,
        style: "shadow-lg shadow-sky-400"
    },
    {
        name: "MUI",
        src: material,
        style: "shadow-lg shadow-blue-600"
    },
    {
        name: "Node.js",
        src: node,
        style: "shadow-lg shadow-green-400"
    },
    {
        name: "Bootstrap",
        src: bootstrap,
        style: "shadow-lg shadow-purple-600"
    },
    {
        name: "shadow-lg Figma",
        src: figma,
        style: "shadow-lg shadow-orange-500"
    },
    {
        name: "Jira",
        src: jira,
        style: "shadow-lg shadow-sky-800"
    }
] as const
export default techskills;