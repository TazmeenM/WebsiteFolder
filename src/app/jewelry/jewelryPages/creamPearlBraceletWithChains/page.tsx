import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import Description from "../components/Description"
import PageLayout from "../components/PageLayout"
import creamPearlBraceletWithChains from "../../images/creamPearlBraceletWithChains.jpg"
import "../jewelryPages.css";

const images = [
  {imageSource: creamPearlBraceletWithChains, imageAlt: "Cream Pearl Bracelet With Chains"},
  {imageSource: creamPearlBraceletWithChains, imageAlt: "Cream Pearl Bracelet With Chains"}
]

const productInformation = {
  productName: "Cream Pearl Bracelet With Chains", 
  productDescription: "A cream pearl bracelet with chains"
}

export default function CreamPearlBraceletWithChains() {
  return (
    <>
      <PageLayout images = {images} productName = {productInformation.productName} productDescription = {productInformation.productDescription}></PageLayout>
    </>
  );
}
