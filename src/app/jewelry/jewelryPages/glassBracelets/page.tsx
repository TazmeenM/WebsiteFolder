import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import blueGlassBracelet from "../../images/blueGlassBracelet.jpg"
import pinkGlassBracelet from "../../images/pinkGlassBracelet.jpg"
import "../jewelryPages.css";

const images = [
  {imageSource: blueGlassBracelet, imageAlt: "Blue Glass Bracelet"},
  {imageSource: pinkGlassBracelet, imageAlt: "Pink Glass Bracelet"}
]

const productInformation = {
  productName: "Glass Bracelets", 
  productDescription: "Glass Bracelets in blue and pink. Set of 2."
}

export default function GlassBracelets() {
  return (
    <>
      <PageLayout images = {images} productName = {productInformation.productName} productDescription = {productInformation.productDescription}></PageLayout>
    </>
  );
}
