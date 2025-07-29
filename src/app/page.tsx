
import Image from "next/image";
import Hello from "./components/Hello";
import CarouselBuilder from "./components/CarouselBuilder";
import Navbar from "./components/Navbar";
import "./home.css";
import ContactInformation from "./components/ContactInformation";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className ="flex gap-10 p-4 pb-100">
        <div>
          <h1 className = "text-[24px]">About Me</h1>
          <p>I am an artist creating pieces coming to mind. I've been making jewelry since I was in grade 5, and although I barely wear my pieces, I take great pleasure in unleashing my creativity by creating them.</p>
        </div>  
        <div className = "carouselContainer">
          <h1 className = "p-2">Click the arrows to go through some of the pieces I've made:</h1>
          <CarouselBuilder></CarouselBuilder>
        </div>
      </div>
      <ContactInformation></ContactInformation>  
    </div>
  );
}
