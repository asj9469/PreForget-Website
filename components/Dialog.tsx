import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Inter, Noto_Sans } from 'next/font/google'
const noto_sans = Noto_Sans({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"], })
export function DialogDefault() {
  const [open, setOpen] = React.useState(true);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="xs">
        <DialogHeader className={`flex justify-center items-center ${noto_sans.className}`}> New Version Available</DialogHeader>
        <DialogBody className={`flex justify-center font-semibold ${noto_sans.className} text-[#393939]`}>
          Check out the newly released version of PreForget!
        </DialogBody>
        <DialogFooter className={`flex justify-center ${noto_sans.className}`}>
        <a href="/v2">
            <Button variant="gradient" onClick={handleOpen} className="focus:outline-none focus:ring-0">
                <span>
                    Check it out
                </span>
            </Button>
        </a>
        <Button
            variant="text"
            color="black"
            onClick={handleOpen}
            className="ml-1"
        >
            <span>Close</span>
        </Button>
        
        </DialogFooter>
      </Dialog>
    </>
  );
}