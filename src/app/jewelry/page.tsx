'use client';
import Image from "next/image";
import Navbar from "../components/Navbar"
import JewelryGrid from "./components/JewelryGrid";

//For the images
import greyPearlBracelet from "./images/greyPearlBracelet.jpg"
import creamPearlBracelet from "./images/creamPearlBracelet.jpg"
import creamPearlBraceletWithChains from "./images/creamPearlBraceletWithChains.jpg";
import blueGlassBracelet from "./images/blueGlassBracelet.jpg";
import pinkGlassBracelet from "./images/pinkGlassBracelet.jpg";
import DropdownMenu from "./components/DropdownMenu";
import { useState } from "react";

const images = [
  {src: greyPearlBracelet, alt: "Grey Pearl Bracelet", title: "Grey Pearl Bracelet", pageLink: "../jewelry/jewelryPages/greyPearlBracelet", price: 15.00},
  {src: creamPearlBracelet, alt: "Cream Pearl Bracelet", title: "Cream Pearl Bracelet", pageLink: "../jewelry/jewelryPages/creamPearlBracelet", price: 15.00} ,
  {src: creamPearlBraceletWithChains, alt: "Cream Pearl Bracelet With Chains", title: "Cream Pearl Bracelet With Chains", pageLink: "../jewelry/jewelryPages/creamPearlBraceletWithChains", price: 15.00},
  {src: blueGlassBracelet, alt: "Blue Glass Bracelet", title: "Blue Glass Bracelet", pageLink: "../jewelry/jewelryPages/blueGlassBracelet", price: 10.00},
  {src: pinkGlassBracelet, alt: "Pink Glass Bracelet", title: "Pink Glass Bracelet", pageLink: "../jewelry/jewelryPages/pinkGlassBracelet", price: 10.00}
]
export default function Jewelry() {
  const [jewelryImages, setImages] = useState(images);

  const sorter = (sortKey: string) => {
    const sortedImages = [...jewelryImages];
    if (sortKey === "2"){
      sortedImages.sort((a, b) => a.price - b.price);
    }
    setImages(sortedImages);
  }
  return (
    <div>
      <Navbar></Navbar>
      <DropdownMenu sortChanger = {sorter}></DropdownMenu>
      <JewelryGrid products = {jewelryImages}></JewelryGrid>
    </div>
  );
}
