import mtn from "../../assets/mtn.svg";
import cfa from "../../assets/cfa.svg";
import mest from "../../assets/mest.png";


const experiences: any = [
    {
        company: "MEST AFRICA",
        logo: mest,
        position: "Web Development Trainee",
        role1: "Led the team to design an interactive ecommerce web app for agro products",
        style:"shadow-sky-400"
    },
    {
        company: "MTN Ghana",
        logo: mtn,
        position: "Retail Experience Agent",
        role1: "Analyzed and grouped customer complaints and escalated to backend office for assistance",
        role2: "Built long-term, loyal customer relations by providing top-notch service",
        style: "shadow-yellow-400"
    },
    {
        company: "CFA Ghana Society",
        logo: cfa,
        position: "Global Research Challenge Participant",
        role1: "Analyzed, evaluated and made market recommendation for MTN Ghana",
        role2: "Organized and coordinated team members to complete tasks as the team leader",
        style: "shadow-indigo-600"
    }
] as const

export default experiences;