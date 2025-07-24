import Image from "next/image";
import Navbar from "../components/Navbar"
import JewelryGrid from "./components/JewelryGrid";

export default function Jewelry() {
  return (
    <div>
      <Navbar></Navbar>
      <JewelryGrid></JewelryGrid>
    </div>
  );
}
