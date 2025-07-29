import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import greyPearlBracelet from "../../images/greyPearlBracelet.jpg"
import greyPearlBracelet2 from "../../images/greyPearlBracelet2.jpg"
import "../jewelryPages.css";

const images = [
  {imageSource: greyPearlBracelet, imageAlt: "Grey Pearl Bracelet"},
  {imageSource: greyPearlBracelet2, imageAlt: "Grey Pearl Bracelet"}
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
  );
}
