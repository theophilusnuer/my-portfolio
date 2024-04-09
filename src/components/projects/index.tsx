import ProjectList from "../project-list";
import projects from "../raw-data/projects";

export default function Projects() {
    return (
        <div className="flex flex-col items-center w-5/6 mx-auto mt-8">
            <div className=" ">
                <h2 className="text-black bg-white text-2xl rounded-lg p-2 text-center font-semibold mb-4">Projects</h2>
                <ProjectList/>
            </div>
        </div>
    );
}
