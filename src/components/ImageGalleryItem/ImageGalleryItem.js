import React from 'react';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, tags, largeImageURL, onModal }) => {
  return (
    <img
      className={style.imageGalleryItemImage}
      src={image}
      alt={tags}
      onClick={() => onModal(largeImageURL)}
    />
  );
};

// ImageGalleryItem.defaultProps = {
//   images:
//     'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
//   tags: '',
// };

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
