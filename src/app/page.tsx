import { TextParallaxContentExample } from "./components/TextParallax";
import {HoverImageLinks } from "./components/HoverImages";

export default function Home() {
  return (
    <div>
      <HoverImageLinks />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <TextParallaxContentExample />
    </div>  
  );
}
