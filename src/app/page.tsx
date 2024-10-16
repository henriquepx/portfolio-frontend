import { ContainerScroll } from "./components/ContainerScrollMain";
import Bg from '../assets/bg.png'
import Image from 'next/image';
// import { HoverImageLinks } from "./components/HoverImages";
import { Spotlight } from "./components/Spotlight";
import { Example } from "./components/Contact";
import { SlideTabsExample } from "./components/Header";
export default function Home() {
  return (
    <div>
      <SlideTabsExample />
      <Spotlight />
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={  
            <>
              <h1 className="text-4xl font-mont">
                Unleash the power of <br />
                <span className="text-4xl font-mont md:text-[6rem] font-bold mt-1 leading-none">
                  Front-end Development
                </span>
              </h1>
            </>
          }>
          <Image
            src={Bg}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <Example />
      {/* <HoverImageLinks /> */}
    </div>  
  );
}