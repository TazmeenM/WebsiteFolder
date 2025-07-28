import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import blueGlassBracelet from "../../images/blueGlassBracelet.jpg"

const images = [
  {imageSource: blueGlassBracelet, imageAlt: "Blue Glass Bracelet"},
  {imageSource: blueGlassBracelet, imageAlt: "Blue Glass Bracelet"}
]

const productInformation = {
  productName: "Blue Glass Bracelet", 
  productDescription: "A Blue Glass Bracelet"
}

export default function blueGlassBracelet() {
  return (
    <>
      <PageLayout images = {images} productName = {productInformation.productName} productDescription = {productInformation.productDescription}></PageLayout>
    </>
    /*
    <>
      <Navbar></Navbar>
      <div className = "pl-4">  
        <Description productName = {productInformation.productName} productDescription = {productInformation.productDescription}></Description>
        <ImagesDisplay images = {images}></ImagesDisplay>
      </div>
    </>
    */
  );
}
