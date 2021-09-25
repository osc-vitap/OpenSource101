import React, { Suspense } from 'react';
import { useState } from 'react';
import './App.css';
const Cardui = React.lazy(() => import('./Cardui'));
// import * as data from 'https://raw.githubusercontent.com/Open-Source-Community-VIT-AP/OpenSource101/master/.data/complete-data.json';

function App() {
  // console.log(data);

    const [data, setdata] = useState([]);

  const getapi = () =>{

    fetch('https://raw.githubusercontent.com/Open-Source-Community-VIT-AP/OpenSource101/master/.data/complete-data.json')
    .then((response) => response.json())
    .then((json) => {
      setdata(json);
      
    })
  }
  getapi();
  return (
    <div className="App">
      <h1>Awesome Contributors</h1>
      <div className="cards">
        {data.filter((val) =>{
            return val
        }).map((val, key) => {
          return (
            <Suspense fallback={<div>Loading...</div>}>
            
            <Cardui 
              name={val["github-username"]}
              game={val["favourite-game"]}
              lang={val["favourite-language"]}
              color={val["favourite-color"]}
            />
            </Suspense>
          );
        })}
      </div>

    </div>
  );
}

export default App;
