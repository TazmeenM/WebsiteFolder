import Image from "next/image";
import Jewelry from "./jewelry";
import Navbar from "../../../components/Navbar"
import ImagesDisplay from "../components/ImagesDisplay"
import greyPearlBracelet from "../../images/greyPearlBracelet.jpg"

const images = [
  {imageSource: greyPearlBracelet, imageAlt: "Grey Pearl Bracelet"},
  {imageSource: greyPearlBracelet, imageAlt: "Grey Pearl Bracelet"}
]

export default function GreyPearlBracelet() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Grey Pearl Bracelet</h1>
      <ImagesDisplay images = {images}></ImagesDisplay>
    </>
  );
}
