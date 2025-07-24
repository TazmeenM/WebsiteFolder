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
      <div className = "pl-4">  
        <Description productName = {productName} productDescription = {productDescription}></Description>
        <ImagesDisplay images = {images}></ImagesDisplay>
      </div>
    </>
  );
}
