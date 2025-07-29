import Image, { StaticImageData } from "next/image";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"

interface PageLayoutProps{
    images: {imageSource: string | StaticImageData, imageAlt: string}[];
    productName: string;
    productDescription: string;
}

export default function PageLayout({images, productName, productDescription}: PageLayoutProps) {
  return (
    <>
      <Navbar></Navbar>
      <div className = "pl-8 pt-4 pb-40 flex flex-row gap-20">  
        <ImagesDisplay images = {images}></ImagesDisplay>
        <Description productName = {productName} productDescription = {productDescription}></Description>
      </div>
    </>
  );
}
