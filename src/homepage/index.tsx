import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skills";
import bkImg from "../assets/bgimg2.png";

export default function Homepage() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-cover bg-center bg-blur-sm" style={{ backgroundImage: `url(${bkImg})` }}></div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Skills />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}
