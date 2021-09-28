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
      <a href="https://github.com/Open-Source-Community-VIT-AP/OpenSource101" target="_blank">

      <svg className="button" xmlns="http://www.w3.org/2000/svg" width="143.674" height="38.874" viewBox="0 0 143.674 38.874">
        <g id="Group_67" data-name="Group 67" transform="translate(-1468.11 -450.911)">
    <rect id="Rectangle_493" data-name="Rectangle 493" width="143.674" height="38.874" rx="10" transform="translate(1468.11 450.911)" fill="#fff"/>
    <g id="Group_66" data-name="Group 66" transform="translate(1479.326 459.072)">
      <path id="Icon_awesome-github" data-name="Icon awesome-github" d="M7.847,18.981c0,.095-.109.17-.246.17-.156.014-.265-.061-.265-.17s.109-.17.246-.17S7.847,18.872,7.847,18.981Zm-1.471-.213c-.033.095.061.2.2.232a.222.222,0,0,0,.293-.095c.028-.095-.061-.2-.2-.246A.243.243,0,0,0,6.376,18.768Zm2.091-.08c-.137.033-.232.123-.218.232s.137.156.279.123.232-.123.218-.218S8.6,18.673,8.467,18.688ZM11.579.563A11.342,11.342,0,0,0,0,12.1,11.858,11.858,0,0,0,8.017,23.418c.605.109.818-.265.818-.572s-.014-1.911-.014-2.9c0,0-3.311.709-4.006-1.41,0,0-.539-1.376-1.315-1.731,0,0-1.083-.743.076-.728A2.5,2.5,0,0,1,5.4,17.292a2.5,2.5,0,0,0,3.448.989,2.629,2.629,0,0,1,.757-1.594c-2.644-.293-5.312-.676-5.312-5.227A3.585,3.585,0,0,1,5.411,8.674a4.469,4.469,0,0,1,.123-3.212C6.523,5.155,8.8,6.74,8.8,6.74a11.174,11.174,0,0,1,5.941,0S17.014,5.151,18,5.463a4.467,4.467,0,0,1,.123,3.212,3.677,3.677,0,0,1,1.22,2.786c0,4.564-2.786,4.929-5.43,5.227a2.8,2.8,0,0,1,.8,2.195c0,1.594-.014,3.566-.014,3.954,0,.307.218.681.818.572a11.749,11.749,0,0,0,7.937-11.3A11.6,11.6,0,0,0,11.579.563ZM4.6,16.876c-.061.047-.047.156.033.246s.184.109.246.047.047-.156-.033-.246S4.659,16.815,4.6,16.876Zm-.511-.383c-.033.061.014.137.109.184a.141.141,0,0,0,.2-.033c.033-.061-.014-.137-.109-.184C4.2,16.431,4.12,16.446,4.087,16.493Zm1.533,1.684c-.076.061-.047.2.061.293.109.109.246.123.307.047s.033-.2-.061-.293C5.823,18.115,5.681,18.1,5.619,18.177Zm-.539-.7c-.076.047-.076.17,0,.279s.2.156.265.109a.216.216,0,0,0,0-.293C5.279,17.467,5.156,17.42,5.08,17.482Z" transform="translate(0 -0.563)"/>
      <text id="GitHub_repo" data-name="Source Code" transform="translate(29.674 15.943)" font-size="16" font-family="ProductSans-Bold, Product Sans" font-weight="700" letter-spacing="0.01em"><tspan x="0" y="0">GitHub repo</tspan></text>
    </g>
  </g>
</svg>
      </a>

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
