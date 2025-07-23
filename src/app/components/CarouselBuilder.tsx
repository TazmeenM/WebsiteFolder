import Image from "next/image"
import React from 'react';
import { Carousel } from 'antd';
import greyPearlBracelet from "../jewelry/images/greyPearlBracelet.jpg";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '25vh',
  width: '25vw',
  color: '#fff',
  lineHeight: '25vh',
  textAlign: 'center',
  background: '#0d0054',
};

const CarouselBuilder: React.FC = () => (
  <>
    <Carousel className = "carousel apply bg-[var(--background-blue)] w-1/2 h-1/2" arrows infinite={true}>
      <div>
        <h3 style={contentStyle}><Image src = {greyPearlBracelet} alt = "Grey Pearl Bracelet"></Image></h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    <br />
  </>
);

export default CarouselBuilder;
