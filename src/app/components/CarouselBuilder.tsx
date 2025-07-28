import Image from "next/image"
import React from 'react';
import { Carousel } from 'antd';
import bracelets from "../jewelry/images/bracelets.jpg";
import greyPearlBracelet from "../jewelry/images/greyPearlBracelet.jpg";
import creamPearlBracelet from "../jewelry/images/creamPearlBracelet.jpg";
import creamPearlBraceletWithChains from "../jewelry/images/creamPearlBraceletWithChains.jpg";

const contentStyle: React.CSSProperties = {
  paddingLeft: '10vw',
  height: '25vh',
  width: '50vw',
  color: '#fff',
  lineHeight: '25vh',
  textAlign: 'center',
  position: 'relative',
};

const carouselStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '50%',
  overflow: 'hidden',
  background: '#0d0054',
}

const CarouselBuilder: React.FC = () => (
  <>
    <Carousel style = {carouselStyle} arrows infinite={true}>
      <div>
        <h3 style={contentStyle}><a href = "/jewelry"><Image src = {bracelets} alt = "Bracelets" fill style ={{objectFit: "contain"}}></Image></a></h3>
      </div>
      <div>
        <h3 style={contentStyle}><a href = "../jewelry/jewelryPages/greyPearlBracelet"><Image src = {greyPearlBracelet} alt = "Grey Pearl Bracelet" fill style ={{objectFit: "contain"}}></Image></a></h3>
      </div>
      <div>
        <h3 style={contentStyle}><Image src = {creamPearlBracelet} alt = "Cream Pearl Bracelet" fill style ={{objectFit: "contain"}}></Image></h3>
      </div>
      <div>
        <h3 style={contentStyle}><Image src = {creamPearlBraceletWithChains} alt = "Cream Pearl Bracelet With Chains" fill style ={{objectFit: "contain"}}></Image></h3>
      </div>
    </Carousel>
    <br />
  </>
);

export default CarouselBuilder;
