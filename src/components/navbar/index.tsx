import Contactsheet from "../contactsheet";


export default function Navbar() {
    return (
        <nav className="bg-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <a href="#theo" className="text-white mr-4 text-lg">Theo</a>
          </div>
          <div className="flex flex-wrap justify-end items-center">
            <a href="#skills" className="text-white mx-2 my-1 sm:my-0">Skills</a>
            <a href="#experience" className="text-white mx-2 my-1 sm:my-0">Experience</a>
            <a href="#projects" className="text-white mx-2 my-1 sm:my-0">Projects</a>
            <Contactsheet/>
          </div>
        </div>
      </nav>
    );
}