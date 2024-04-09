import projects from "../raw-data/projects";

export default function ProjectList() {
    return (
        <div className="flex flex-wrap justify-center">
            {projects.map(project => (
                <div key={project} className={`w-48 md:w-64 mx-2 mb-4 bg-inherit shadow-2xl  hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg flex flex-col ${project.style}`} >
                    <div className="w-full h-[150px] overflow-hidden rounded-lg">
                        <img
                            className="w-full h-full object-contain group-hover:scale-110 duration-300 cursor-pointer rounded-lg"
                            src={project.logo}
                            alt="Image"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2 p-2">
                        <div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm md:text-base uppercase text-amber-200 text-designColor font-normal">
                                    {project.title}
                                </h3>
                            </div>
                            <p className="text-xs md:text-sm tracking-wide mt-2 text-white hover:text-gray-100 duration-300">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
