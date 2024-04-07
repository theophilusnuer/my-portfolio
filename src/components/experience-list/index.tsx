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
import experiences from "../raw-data/experience";


  export default function ExperienceList() {
    return(
<Carousel className="w-2/4">
      <CarouselContent className="-ml-1">
        {experiences.map(experience => (
          <CarouselItem key={experience} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className={`p-1 bg-inherit border-none ${experience.style}  hover:scale-110 transition-transform duration-300 ease-in-out`} style={{ margin: '10px' }}>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                 <img src={experience.logo} alt={experience.company} className="overflow-hidden"/>
                 <h2 className={`text-white font-semibold ${experience.style}` }text-center mt-1 >{experience.company}</h2>
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