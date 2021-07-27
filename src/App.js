import './App.css';
import Seachbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery';
import { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    showModal: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(
        'https://pixabay.com/api/?q=sun&page=1&key=21973374-56c885108110b7a34a7b7e2cd&image_type=photo&orientation=horizontal&per_page=12',
      )
      .then(response => this.setState({ images: response.data.hits }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, isLoading, showModal, error, largeImageURL } = this.state;

    return (
      <div className="App">
        <Seachbar />
        <>
          {error && <p>Whoops, something went wrong: {error.message}</p>}
          {isLoading && (
            <Loader
              type="Circles"
              color="#3f51b5"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
          {images.length > 0 && <ImageGallery images={images} />}
        </>
        {showModal && (
          <Modal>
            {' '}
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
