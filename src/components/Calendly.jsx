import { InlineWidget, PopupButton } from "react-calendly";
import graphic from '@/images/calendly.png'
import Image from "next/image";

export default function Calendly() {

  return (
    <div className="cal_div">
      <Image alt="schedule a call image" className="h-full w-full flex object-contain object-top" layout="fill" src={graphic.src} />
    </div>
  );
}
