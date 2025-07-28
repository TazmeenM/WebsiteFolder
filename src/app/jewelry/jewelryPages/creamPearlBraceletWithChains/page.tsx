import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import creamPearlBracelet from "../../images/creamPearlBracelet.jpg"

const images = [
  {imageSource: creamPearlBracelet, imageAlt: "Cream Pearl Bracelet"},
  {imageSource: creamPearlBracelet, imageAlt: "Cream Pearl Bracelet"}
]

const productInformation = {
  productName: "Cream Pearl Bracelet", 
  productDescription: "Cream pearl bracelet"
}

export default function CreamPearlBracelet() {
  return (
    <>
      <PageLayout images = {images} productName = {productInformation.productName} productDescription = {productInformation.productDescription}></PageLayout>
    </>
  );
}
