import './App.css';
import Images from './components/Images';
import Header from './components/Header';
import {useState} from 'react';
import {imgData} from './imgs.js';

function App() {
  const [images, setImages] = useState(imgData);

  return (
    <div className="App">
      <Header />
      <Images images={images}/>
      <div>
      </div>
    </div>
  );
}

export default App;
