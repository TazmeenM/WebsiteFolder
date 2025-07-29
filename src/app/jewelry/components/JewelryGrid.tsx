import Image, { StaticImageData } from "next/image";
import React from 'react';
import { Col, Divider, Row } from 'antd';
import Card from "./Card"
import "../../globals.css";

//Importing the images
import greyPearlBracelet from "../images/greyPearlBracelet.jpg"
import creamPearlBracelet from "../images/creamPearlBracelet.jpg"
import creamPearlBraceletWithChains from "../images/creamPearlBraceletWithChains.jpg";
import blueGlassBracelet from "../images/blueGlassBracelet.jpg";
import pinkGlassBracelet from "../images/pinkGlassBracelet.jpg";


const style: React.CSSProperties = { 
    background: 'transparent', padding: '12px', color: '#ffffff'
};

interface productInformation{
    //For the image
    src: string | StaticImageData;
    alt: string
    title: string
    pageLink: string
    price: number
}

interface jewelryGridProps{
  products: productInformation[];
}

const JewelryGrid: React.FC<jewelryGridProps> = ({products}) => {
  const productRows = [];
  if (products.length % 3 != 0){
    for (let i = 0; i < products.length/3 - 1; i+=3){
      productRows.push(
        <div key={i}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={8}>
              <Card imageSource = {products[i].src} imageAlt = {products[i].alt} title = {products[i].title} pageLink = {products[i].pageLink} price = {products[i].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card imageSource = {products[i + 1].src} imageAlt = {products[i + 1].alt} title = {products[i + 1].title} pageLink = {products[i + 1].pageLink} price = {products[i + 1].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card imageSource = {products[i + 2].src} imageAlt = {products[i + 2].alt} title = {products[i + 2].title} pageLink = {products[i + 2].pageLink} price = {products[i + 2].price}></Card>
            </Col>
          </Row>
        </div>
      )
    }
    if (products.length % 3 == 1){
      productRows.push(
        <div key={products.length}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={8}>
              <Card imageSource = {products[products.length - 1].src} imageAlt = {products[products.length - 1].alt} title = {products[products.length - 1].title} pageLink = {products[products.length - 1].pageLink} price = {products[products.length - 1].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
            </Col>
            <Col className="gutter-row" span={8}>
            </Col>
          </Row>
        </div>
      )
    }

    else if (products.length % 3 == 2){
      productRows.push(
        <div key={products.length - 2}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={8}>
              <Card imageSource = {products[products.length - 2].src} imageAlt = {products[products.length - 2].alt} title = {products[products.length - 2].title} pageLink = {products[products.length - 2].pageLink} price = {products[products.length - 2].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card imageSource = {products[products.length - 1].src} imageAlt = {products[products.length - 1].alt} title = {products[products.length - 1].title} pageLink = {products[products.length - 1].pageLink} price = {products[products.length - 1].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
            </Col>
          </Row>
        </div>
      )
    }
  }
  else{
    for (let i = 0; i < products.length/3; i+=3){
      productRows.push(
        <div key={i}>
          <Row gutter={20} justify = "end">
            <Col className="name" span={8}>
              <Card imageSource = {products[i].src} imageAlt = {products[i].alt} title = {products[i].title}  pageLink = {products[i].pageLink} price = {products[i].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card imageSource = {products[i + 1].src} imageAlt = {products[i + 1].alt} title = {products[i + 1].title}  pageLink = {products[i + 1].pageLink} price = {products[i + 1].price}></Card>
            </Col>
            <Col className="gutter-row" span={8}>
              <Card imageSource = {products[i + 2].src} imageAlt = {products[i + 2].alt} title = {products[i + 2].title}  pageLink = {products[i + 2].pageLink} price = {products[i + 2].price}></Card>
            </Col>
          </Row>
        </div>
      )
    }
  }
  return productRows;
};

export default JewelryGrid;