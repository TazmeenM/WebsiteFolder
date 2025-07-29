import Image, { StaticImageData } from "next/image";
import React from 'react';
import { Col, Divider, Row } from 'antd';
import "../../home.css";

//Importing the images
import greyPearlBracelet from "../images/greyPearlBracelet.jpg"
import creamPearlBracelet from "../images/creamPearlBracelet.jpg"

interface cardProperties{
    //For the image
    imageSource: string | StaticImageData;
    imageAlt: string
    pageLink: string

    //For the description
    title: string
    price: number
}

const style: React.CSSProperties = { 
    background: 'transparent', 
    padding: '12px', 
    color: '#000000', 
    border: '1px',
    width: "100%",
    maxWidth: "300px",
    minWidth: "200px",
};
const imageStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "100%",
}


const Card: React.FC<cardProperties> = ({imageSource, imageAlt, pageLink, title, price}) => (
    <div style={style} className = "justify-center">
        <a href = {pageLink} className = "justify-center">
            <Image style = {imageStyle} src={imageSource} alt = {imageAlt} width = "200" height = "200"></Image>
            <p className = "justify-center">{title}</p>
            <p className = "justify-center">${price.toFixed(2)}</p>
        </a>
    </div>
);

export default Card;