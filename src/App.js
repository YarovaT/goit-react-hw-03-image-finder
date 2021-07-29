import './App.css';
import Seachbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Button from './components/Button';
// import Modal from './components/Modal/Modal';
// import Api from './api/new-api';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    // showModal: false,
    searchQuery: '',
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg();
    }
  }

  fetchImg = () => {
    const { currentPage, searchQuery } = this.state;
    // const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21973374-56c885108110b7a34a7b7e2cd&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response =>
        this.setState(prevState => ({
          images: response.data.hits,
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className="App">
        <Seachbar onSubmit={this.onChangeQuery} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {isLoading && (
          <Loader
            type="Circles"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
            position="center"
          />
        )}

        {<ImageGallery images={images} />}

        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImg} />}
      </div>
    );
  }
}

export default App;
