import { InlineWidget, PopupButton } from "react-calendly";
import graphic from '@/images/calendly.png'
import Image from "next/image";

export default function Calendly() {

  return (
    <div className="cal_div">
      {/* <PopupButton
        url="https://calendly.com/acmesales"
        rootElement={document.getElementById("__next")}
        text={<img src={graphic.src} />}
        // text={<InlineWidget url="https://calendly.com/justincairnsuk/15min?month=2022-10" />}
      /> */}
      <Image className="h-full w-full flex object-contain object-top" layout="fill" src={graphic.src} />
    </div>
  );
}
