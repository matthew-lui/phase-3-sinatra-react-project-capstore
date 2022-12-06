import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';


const API = "http://localhost:9292/stores"
const API2=  "http://localhost:9292/inventories"
function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])

  useEffect(() => {
    fetch(API2)
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])


  return (
   <div>
     hello world
   </div>
  )
}

export default App;
