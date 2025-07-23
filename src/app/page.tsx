import Image from "next/image";
import Hello from "./components/Hello";
import CarouselBuilder from "./components/CarouselBuilder";
import Navbar from "./components/Navbar";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <CarouselBuilder></CarouselBuilder>
    </div>
  );
}
