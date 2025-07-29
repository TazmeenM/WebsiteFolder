import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import pinkGlassBracelet from "../../images/pinkGlassBracelet.jpg"
import "../jewelryPages.css";

const images = [
  {imageSource: pinkGlassBracelet, imageAlt: "Pink Glass Bracelet"},
  {imageSource: pinkGlassBracelet, imageAlt: "Pink Glass Bracelet"}
]

const productInformation = {
  productName: "Pink Glass Bracelet", 
  productDescription: "A Pink Glass Bracelet"
}

export default function PinkGlassBracelet() {
  return (
    <>
      <PageLayout images = {images} productName = {productInformation.productName} productDescription = {productInformation.productDescription}></PageLayout>
    </>
  );
}
