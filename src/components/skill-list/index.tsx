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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card"
import techskills from "../raw-data";

  export default function SkillList() {
    return(
<Carousel className="w-2/4">
      <CarouselContent className="-ml-1">
        {techskills.map(techskill => (
          <CarouselItem key={techskill} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div>
              <Card className={`p-1 bg-inherit border-none ${techskill.style}`} style={{ margin: '10px' }}>
                <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                 <img src={techskill.src} alt={techskill.name} className="overflow-hidden"/>
                 <h3 className='text-white text-center mt-2 '>{techskill.name}</h3>
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