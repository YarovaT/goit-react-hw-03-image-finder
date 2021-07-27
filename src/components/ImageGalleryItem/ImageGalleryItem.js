import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <img src={webformatURL} alt="" className={style.imageGalleryItemImage} />
  );
};

export default ImageGalleryItem;
