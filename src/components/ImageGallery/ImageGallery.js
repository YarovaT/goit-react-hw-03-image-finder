import React from 'react';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImgClick }) => (
  <ul className={style.imageGallery}>
    {images.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li key={id} className={style.imageGalleryItem}>
        <ImageGalleryItem
          image={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          onModal={onImgClick}
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
