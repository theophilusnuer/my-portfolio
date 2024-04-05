import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../ui/carousel"
  import {
    Card,
    CardContent,
  } from "../ui/card"
import projects from "../raw-data/projects";


  export default function ProjectList() {
    return(
<Carousel className="w-2/4">
      <CarouselContent className="-ml-1">
        {projects.map(project => (
          <CarouselItem key={project} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className={`p-1 bg-inherit border-none ${project.style}  hover:scale-110 transition-transform duration-300 ease-in-out`} style={{ margin: '10px' }}>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                 <img src={project.logo} alt={project.title} className=""/>
                 <h2 className={`text-white font-semibold mt-3 ${project.style}` }text-center mt-1 >{project.title}</h2>
                <h3 className="text-white">{project.description}</h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    );
  }