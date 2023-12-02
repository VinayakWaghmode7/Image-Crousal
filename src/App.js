import './App.css';

import Header from './Header';
import ImageSlider from './ImageSlider';

function App() {
  const country="India";
  return (
    <>
   <Header  props={country}/>
   <ImageSlider/>
   </>
  );
}

export default App;
