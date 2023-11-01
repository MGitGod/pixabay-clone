import { useRef, useState } from 'react';
import './App.css';
import ImageGallery from './ImageGallery';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const endpointURL = `https://pixabay.com/api/?key=40404262-4ceba3469fbe34f976bdea52c&q=${ref.current.value}&image_type=photo`;
    fetch(endpointURL).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data.hits);
      setFetchData(data.hits);
    });
  }
  return (
    <div className="container">
      <h2>Pixabay Clone</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='画像を検索する' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
      </div>
  );
}

export default App;
