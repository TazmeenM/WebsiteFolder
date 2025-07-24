import Image from "next/image";
import React from 'react';
import { Col, Divider, Row } from 'antd';
import Card from "./Card"
import "../../globals.css";

//Importing the images
import greyPearlBracelet from "../images/greyPearlBracelet.jpg"
import creamPearlBracelet from "../images/creamPearlBracelet.jpg"

const style: React.CSSProperties = { 
    background: 'transparent', padding: '12px 0', color: '#ffffff'
};

const images = [
  {src: greyPearlBracelet, alt: "Grey Pearl Bracelet", title: "Grey Pearl Bracelet", pageLink: "../jewelry/jewelryPages/greyPearlBracelet"},
  {src: creamPearlBracelet, alt: "Cream Pearl Bracelet", title: "Cream Pearl Bracelet", pageLink: "../jewelry/jewelryPages/creamPearlBracelet"}
]

const JewelryGrid: React.FC = () => {
  const productRows = [];
  if (images.length % 3 != 0){
    for (let i = 0; i < images.length/3 - 1; i+=3){
      productRows.push(
        <div key={i}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={4}>
              <Card imageSource = {images[i].src} imageAlt = {images[i].alt} title = {images[i].title} pageLink = {images[i].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card imageSource = {images[i + 1].src} imageAlt = {images[i + 1].alt} title = {images[i + 1].title} pageLink = {images[i + 1].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card imageSource = {images[i + 2].src} imageAlt = {images[i + 2].alt} title = {images[i + 2].title} pageLink = {images[i + 2].pageLink}></Card>
            </Col>
          </Row>
        </div>
      )
    }
    if (images.length % 3 == 1){
      productRows.push(
        <div key={images.length}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={4}>
              <Card imageSource = {images[images.length - 1].src} imageAlt = {images[images.length - 1].alt} title = {images[images.length - 1].title} pageLink = {images[images.length - 1].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
            </Col>
            <Col className="gutter-row" span={4}>
            </Col>
          </Row>
        </div>
      )
    }

    else if (images.length % 3 == 2){
      productRows.push(
        <div key={images.length - 2}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={4}>
              <Card imageSource = {images[images.length - 2].src} imageAlt = {images[images.length - 2].alt} title = {images[images.length - 2].title} pageLink = {images[images.length - 2].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card imageSource = {images[images.length - 1].src} imageAlt = {images[images.length - 1].alt} title = {images[images.length - 1].title} pageLink = {images[images.length - 1].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
            </Col>
          </Row>
        </div>
      )
    }
  }
  else{
    for (let i = 0; i < images.length/3; i+=3){
      productRows.push(
        <div key={i}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={4}>
              <Card imageSource = {images[i].src} imageAlt = {images[i].alt} title = {images[i].title}  pageLink = {images[i].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card imageSource = {images[i + 1].src} imageAlt = {images[i + 1].alt} title = {images[i + 1].title}  pageLink = {images[i + 1].pageLink}></Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card imageSource = {images[i + 2].src} imageAlt = {images[i + 2].alt} title = {images[i + 2].title}  pageLink = {images[i + 2].pageLink}></Card>
            </Col>
          </Row>
        </div>
      )
    }
  }
  return productRows;
};

export default JewelryGrid;