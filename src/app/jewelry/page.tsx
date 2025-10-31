'use client';
import Image, { StaticImageData } from "next/image";
import Navbar from "../components/Navbar"
import JewelryGrid from "./components/JewelryGrid";
import jewelryInformation from "../data/jewelryInformation.json"

//For the images
import greyPearlBracelet from "./images/greyPearlBracelet.jpg"
import creamPearlBracelet from "./images/creamPearlBracelet.jpg"
import creamPearlBraceletWithChains from "./images/creamPearlBraceletWithChains.jpg";
import blueGlassBracelet from "./images/blueGlassBracelet.jpg";
import pinkGlassBracelet from "./images/pinkGlassBracelet.jpg";
import DropdownMenu from "./components/DropdownMenu";
import { useState } from "react";
import ContactInformation from "../components/ContactInformation";

interface productInformation{
    src: string;
    alt: string
    title: string
    pageLink: string
    price: number
}

export default function Jewelry() {
  const products: productInformation[] = jewelryInformation.map((product) => ({
    src: product.images[0].source,
    alt: product.images[0].alt,
    title:product.name,
    price: product.price,
    pageLink: `/jewelry/${product.id}`
  }));

  const [jewelryImages, setImages] = useState(products);

  const sorter = (sortKey: string) => {
    const sortedImages = [...jewelryImages];
    if (sortKey === "1"){
      sortedImages.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (sortKey === "2"){
      sortedImages.sort((a, b) => b.title.localeCompare(a.title));
    }
    else if (sortKey === "3"){
      sortedImages.sort((a, b) => a.price - b.price);
    }
    else if (sortKey === "4"){
      sortedImages.sort((a, b) => b.price - a.price);
    }
    setImages(sortedImages);
  }
  return (
    <div>
      <Navbar></Navbar>
      <h1 className = "p-4 text-[24px]">Jewelry</h1>
      <div className = "flex gap-40">
        <div className = "pt-4">

          <DropdownMenu sortChanger = {sorter}></DropdownMenu>
        </div>  
        <div>
          <JewelryGrid products = {jewelryImages}></JewelryGrid>
        </div> 
      </div> 
      <ContactInformation></ContactInformation>
    </div>
  );
}
