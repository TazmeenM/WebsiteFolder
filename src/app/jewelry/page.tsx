import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../components/Navbar"
import JewelryGrid from "./components/JewelryGrid";

export default function JP() {
  return (
    <div>
      <Navbar></Navbar>
      <JewelryGrid></JewelryGrid>
    </div>
  );
}
