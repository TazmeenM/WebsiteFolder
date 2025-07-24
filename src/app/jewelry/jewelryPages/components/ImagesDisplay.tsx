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
  }));
  
  return <Tabs defaultActiveKey="1" items={imageTabs}/>
}

export default ImagesDisplay;