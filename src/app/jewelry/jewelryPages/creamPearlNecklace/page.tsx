import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import creamPearlNecklace from "../../images/creamPearlNecklace.jpg"
import ContactInformation from "@/app/components/ContactInformation";
import "../jewelryPages.css";

const images = [
  {imageSource: creamPearlNecklace, imageAlt: "Cream Pearl Necklace"},
  {imageSource: creamPearlNecklace, imageAlt: "Cream Pearl Necklace"}
]

const productInformation = {
  productName: "Cream Pearl Necklace", 
  productDescription: "A cream pearl Necklace"
}

export default function CreamPearlNecklace() {
  return (
    <>
      <PageLayout images = {images} productName = {productInformation.productName} productDescription = {productInformation.productDescription}></PageLayout>
      <ContactInformation></ContactInformation>
    </>
  );
}
