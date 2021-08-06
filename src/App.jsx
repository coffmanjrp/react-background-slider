import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import images from './utils/images';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="slider-container">
        {images.length > 0 &&
          images.map((image) => (
            <div
              key={image.id}
              className="slide active"
              style={{
                backgroundImage: `url("${image.url}")`,
              }}
            ></div>
          ))}
        <button id="left" className="arrow left-arrow">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button id="right" className="arrow right-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default App;
