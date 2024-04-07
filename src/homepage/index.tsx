import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Skills from "../components/skills";


export default function Homepage(){
    return(
        <div className="bg-black">
        <Navbar/>
        <Hero/> 
        <Skills/>
        {/* <Contact/> */}
        <Footer/>
        </div>
    );
}