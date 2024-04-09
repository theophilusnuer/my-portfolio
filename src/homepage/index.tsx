import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skills";


export default function Homepage(){
    return(
        <div className="bg-black">
        <Navbar/>
        <Hero/> 
        <Skills/>
        <Projects/>
        <Footer/>
        </div>
    );
}