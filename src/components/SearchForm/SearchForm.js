import React from 'react';
import style from './SearchForm.module.css';

const SeachForm = () => {
  return (
    <form className={style.searchForm}>
      <button type="submit" className={style.searchFormButton}>
        <span className={style.searchFormButtonLabel}>Search</span>
      </button>

      <input
        className={style.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default SeachForm;
