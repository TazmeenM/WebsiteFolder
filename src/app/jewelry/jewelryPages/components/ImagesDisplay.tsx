import Image, { StaticImageData } from "next/image"
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
};

interface imageInformation{
    //For the image
    images: {
      imageSource: string | StaticImageData;
      imageAlt: string;
    }[]
}

const ImagesDisplay: React.FC<imageInformation> = ({images}) => {
    const imageTabs: TabsProps['items'] = images.map((images, i) => ({
      key: (i + 1).toString(),
      label: <Image key = {`label{i}`} src = {images.imageSource} alt = {images.imageAlt} width = "100" height = "100"/>,
      children: <Image key = {`imageDisplayed{i}`} src = {images.imageSource} alt = {images.imageAlt} width = "300" height = "300"/>,
    /*
    {
      key: '1',
      label: <Image src = "" alt = "" width = "300" height = "300"/>,
      children: `<Image></Image>`,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
    */
  }));
  
  return <Tabs defaultActiveKey="1" items={imageTabs}/>
}

export default ImagesDisplay;


/*
interface imageInformation{
    //For the image
    imageSource: string | StaticImageData;
    imageAlt: string
}

const style: React.CSSProperties = { 
    background: 'transparent', padding: '12px 0', color: '#000000', border: '1px'
};


const Card: React.FC<cardProperties> = ({imageSource, imageAlt, pageLink, title}) => (
    <div style={style} className = "justify-center">
        <a href = {pageLink}><Image src={imageSource} alt = {imageAlt} width = "150" height = "150"></Image></a>
        <p className = "justify-center"><a href = {pageLink} className = "dark-blue-link">{title}</a></p>
    </div>
);

export default Card;

*/