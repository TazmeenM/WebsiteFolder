import Image from "next/image"
import React from 'react';
import { Carousel } from 'antd';
import bracelets from "../jewelry/images/bracelets.jpg";
import greyPearlBracelet from "../jewelry/images/greyPearlBracelet.jpg";
import creamPearlBracelet from "../jewelry/images/creamPearlBracelet.jpg";
import creamPearlBraceletWithChains from "../jewelry/images/creamPearlBraceletWithChains.jpg";

const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '200px',
  padding: '4px',
  background: '#0d0054',
  color: '#ffffff',
};

const ContactInformation: React.FC = () => (
  <>
  <div style = {contentStyle}>
    <h1 className = "text-[24px]">Contact Us</h1>
    <p>Email: jewelry.store@gmail.com</p>
    <p>Phone Number: 123-456-7890</p>
    <p>Instagram: @jewelry.store</p>
  </div>
  </>
);

export default ContactInformation;
