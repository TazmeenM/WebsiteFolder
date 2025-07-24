import Image from "next/image"
import React from 'react';

const headingStyle: React.CSSProperties = {
    fontSize: '24px',
};

interface productInformation{
    //For the product
    productName: string;
    productDescription: string;
}

const Description: React.FC<productInformation> = ({productName, productDescription}) => {
    return(
        <div>
            <h1 style = {headingStyle}>{productName}</h1>
            <p>{productDescription}</p>
        </div>
    )
}

export default Description;