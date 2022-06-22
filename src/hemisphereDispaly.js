import React from "react";

import northernPic from './image/north.png';
import southernPic from './image/south.jpg';

const HemisphereConfig={
    Northern: {
text: 'is is northern hemisphere',
picture: northernPic
    },

    Southern:{
        text: 'is is southern hemisphere',
picture: southernPic


    }
}

const HemisphereDisplay = ({ latitude }) => {
    const hemisphere = latitude > 0 ? 'Northern ' : 'Southern ';
    const  picture = latitude > 0 ? northernPic : southernPic;

    return (
        <div>
            <img src= {picture} alt=""/>
            {hemisphere}
        </div>
    )

}
export default HemisphereDisplay;