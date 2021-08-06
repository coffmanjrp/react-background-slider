import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from './utils/images';
import './App.scss';

function App() {
  const [slide, setSlide] = useState(1);
  const length = images.length;

  const handlePrev = () => {
    setSlide((slide) => (slide <= 1 ? length : slide - 1));
  };

  const handleNext = () => {
    setSlide((slide) => (slide >= length ? 1 : slide + 1));
  };

  console.log('slide:' + slide, 'length:' + length);

  return (
    <div className="App">
      <div className="slider-container">
        {images.length > 0 &&
          images.map((image) => (
            <div
              key={image.id}
              className={`slide${slide === image.id ? ' active' : ''}`}
              style={{
                backgroundImage: `url("${image.url}")`,
              }}
            ></div>
          ))}
        <button className="arrow left-arrow">
          <FontAwesomeIcon icon={faArrowLeft} onClick={handlePrev} />
        </button>
        <button className="arrow right-arrow">
          <FontAwesomeIcon icon={faArrowRight} onClick={handleNext} />
        </button>
      </div>
    </div>
  );
}

export default App;
