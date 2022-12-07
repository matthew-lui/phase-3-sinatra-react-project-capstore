// import logo from './logo.svg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Switch, Route} from "react-router-dom"

const API= "http://localhost:9292/stores"
// const API2=  "http://localhost:9292/inventories"
function App() {

  const [data, setData] = useState([]);
  // debugger we are using debugger to debug front/backend connection issues
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => console.log(data));
  }, [])

  // useEffect(() => {
  //   fetch(API2)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // }, [])


  return (
   <div>
    <switch>
      <route exact path= '/'>
        <NavBar/>
      </route>
      <route path ="/inventory">
      <NavBar/>
      <InventoryForm/>
      </route>
      <route pat="/storecardcontainer">
        <NavBar/>
        <StoreCardContainer/>
        <Search/>
      </route>
    </switch>
    
   </div>
  )
}

export default App;
