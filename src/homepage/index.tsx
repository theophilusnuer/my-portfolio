import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skills";


export default function Homepage(){
    return(
        <>
        <Navbar/>
        <Hero/> 
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    );
}