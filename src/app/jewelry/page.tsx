import Image from "next/image";
import Navbar from "../components/Navbar"
import JewelryGrid from "./components/JewelryGrid";
import "./jewelry.css"

export default function Jewelry() {
  return (
    <div>
      <Navbar></Navbar>
      <JewelryGrid></JewelryGrid>
    </div>
  );
}
