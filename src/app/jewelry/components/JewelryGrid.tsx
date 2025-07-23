import Image from "next/image";
import React from 'react';
import { Col, Divider, Row } from 'antd';

//Importing the images
import greyPearlBracelet from "../images/greyPearlBracelet.jpg"
import creamPearlBracelet from "../images/creamPearlBracelet.jpg"

const style: React.CSSProperties = { 
    background: 'transparent', padding: '12px 0', color: '#ffffff'
};

const images = [
  {src: greyPearlBracelet, alt: "Grey Pearl Bracelet", width: "300", height: "300"},
  {src: creamPearlBracelet, alt: "Cream Pearl Bracelet", width: "300", height: "300"}
]

const JewelryGrid: React.FC = () => (
  <>
    <Row gutter={20}>
      <Col className="name" span={4}>
        <div style={style}><Image src={greyPearlBracelet} alt = "Grey Pearl Bracelet" width = "300" height = "300"></Image></div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);

export default JewelryGrid;