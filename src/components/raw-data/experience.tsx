import mtn from "../../assets/mtn.svg";
import cfa from "../../assets/cfa.svg";
import mest from "../../assets/mest.png";
import coreX from "../../assets/coreX.png";


const experiences: any = [
    {
        company: "COREXTREME",
        logo: coreX,
        position: "Web Development Intern",
        role1: "Led the team to design an user friendly admin panel to update requests",
        style:"shadow-lg shadow-orange-500"
    },
    {
        company: "MEST AFRICA",
        logo: mest,
        position: "Web Development Trainee",
        role1: "Led the team to design an interactive ecommerce web app for agro products",
        style:"shadow-lg shadow-sky-400"
    },
    {
        company: "MTN Ghana",
        logo: mtn,
        position: "Retail Experience Agent",
        role1: "Analyzed and grouped customer complaints and escalated to backend office for assistance",
        role2: "Built long-term, loyal customer relations by providing top-notch service",
        style: "shadow-lg shadow-yellow-400"
    },
    {
        company: "CFA Ghana Society",
        logo: cfa,
        position: "Global Research Challenge Participant",
        role1: "Analyzed, evaluated and made market recommendation for MTN Ghana",
        role2: "Organized and coordinated team members to complete tasks as the team leader",
        style: "shadow-lg shadow-indigo-600"
    }
] as const

export default experiences;