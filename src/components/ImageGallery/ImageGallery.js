import React from 'react';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={style.imageGallery}>
    {images.map(({ id, webformatURL }) => (
      <li key={id} className={style.imageGalleryItem}>
        <ImageGalleryItem webformatURL={webformatURL} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
