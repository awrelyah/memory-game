import './App.css';
import Images from './components/Images';
import {useState} from 'react';
import {imgData} from './imgs.js';

function App() {
  const [images, setImages] = useState(imgData);

  return (
    <div className="App">
      <Images images={images}/>
      <div>
      </div>
    </div>
  );
}

export default App;
