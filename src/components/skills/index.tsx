import ExperienceList from "../experience-list"
import ProjectList from "../project-list"
import SkillList from "../skill-list"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs"



export default function Skills() {
  return (
    <Tabs defaultValue="account" className="mx-auto w-5/6">
      <TabsList className="grid w-full grid-cols-2 text-black">
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="skills">
        <Card className="flex justify-center bg-inherit border-none my-4">
          <SkillList />
        </Card>
      </TabsContent>
      <TabsContent value="experience">
        <Card className="flex justify-center bg-inherit border-none my-4">
          <ExperienceList/>
        </Card>
      </TabsContent>
      <TabsContent value="projects">
        <Card className="flex justify-center bg-inherit border-none my-4">
          <ProjectList/>
        </Card>
      </TabsContent>
    </Tabs>
  );
}