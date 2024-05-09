
import React from 'react';
import lake from "../image/lake.JPG"; 
import {imageData} from "./Data";

const ImageGallery = (props) => {
  

  return (
    <div>
      {imageData.map(image => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
