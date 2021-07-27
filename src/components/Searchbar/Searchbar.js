import React from 'react';
import style from './Searchbar.module.css';
import SearchForm from '../SearchForm/SearchForm';

const Searchbar = () => {
  return (
    <header className={style.searchbar}>
      <SearchForm />
    </header>
  );
};

export default Searchbar;
