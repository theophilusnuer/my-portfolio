import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

export default function Contactsheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="text-white hover:cursor-pointer" >Let's talk</div> 
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Send a message</SheetTitle>
          <SheetDescription>
            Feel free to send a message.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input type="email" placeholder="example@email.com" className="col-span-3" />
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="Jack" className="col-span-3" />
          </div>
          <div>
            <Label htmlFor="username" className="text-right">
             Your Message
            </Label>
            <Textarea className="h-32" placeholder="Type your message"/>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-black" type="submit">Send a message</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
