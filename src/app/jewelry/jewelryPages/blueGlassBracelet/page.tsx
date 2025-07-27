import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import greyPearlBracelet from "../../images/greyPearlBracelet.jpg"

const images = [
  {imageSource: greyPearlBracelet, imageAlt: "Grey Pearl Bracelet"},
  {imageSource: greyPearlBracelet, imageAlt: "Grey Pearl Bracelet"}
]

const productInformation = {
  productName: "Grey Pearl Bracelet", 
  productDescription: "A grey pearl bracelet"
}

export default function GreyPearlBracelet() {
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
