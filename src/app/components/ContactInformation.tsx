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
  paddingTop: '6px',
  paddingLeft: '4px',
  background: '#0d0054',
  color: '#ffffff',
};

const contactInfoStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '10vw',
};

const ContactInformation: React.FC = () => (
  <>
  <div style = {contentStyle}>
    <h1 className = "text-[24px] pb-[2vh]">Contact Us</h1>
    <div style = {contactInfoStyle}>
        <p>Email: jewelry.store@gmail.com</p>
        <p>Phone Number: 123-456-7890</p>
        <p>Instagram: @jewelry.store</p>
    </div>
  </div>
  </>
);

export default ContactInformation;
