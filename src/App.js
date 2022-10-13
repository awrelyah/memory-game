import './App.css';
import Images from './components/Images';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import {imgData} from './imgs.js';
import Footer from './components/Footer';

function App() {
  const [images, setImages] = useState(imgData);
  const [score, setScore] = useState({
    current: 0,
    max: 0,
  });

  function handleClick(e, isClicked) {
    const {id} = e.target;
    if(isClicked === true){
      setImages(prev => 
        prev.map(el => el.isClicked === true? {...el, isClicked: false} : {...el}))
        setScore({...score, current:0});
    } else {
      setImages(prev => 
        prev.map(el => el.id == id? {...el, isClicked: true} : {...el}))
        setScore(prev => ({current: prev.current+1, max: prev.current+1 > prev.max ? prev.current+1 : prev.max }));
    }
  }

  //every time score changes shuffle the cards
  useEffect(() => {
    setImages(prev => {
      //pick random element and exclude it from the next draw, swap elements
      for (let i = prev.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prev[i], prev[j]] = [prev[j], prev[i]];
    }
    return [...prev]
    });
  }, [score])
  
  return (
    <div className="App">
      <Header score={score}/>
      <Images images={images} handleClick={handleClick}/>
      <Footer />
    </div>
  );
}

export default App;
