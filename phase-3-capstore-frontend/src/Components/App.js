import '../App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import StoreCardContainer from './StoreCardContainer';
import Home from './Home'
import InventoryContainer from './InventoryContainer';

const API= "http://localhost:9292/stores"
const API2=  "http://localhost:9292/inventories"
function App() {

  const [storeData, setStoreData] = useState([]);
  const [hatData, setHatData] = useState([]);
  // debugger we are using debugger to debug front/backend connection issues
  
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(arrayOfData => 
      setStoreData(arrayOfData)
      );
  }, [])


  useEffect(() => {
    fetch(API2)
    .then(res => res.json())
    .then(arrayOfHatData => 
      setHatData(arrayOfHatData)
      );
  }, [])


 function handleDeleteHat(id){
  const updateHatArray = hatData.filter(hats=> hats.id !==id)
  setHatData(updateHatArray)
}

function updateHat(id){
  const updateInventory = {
    quantity: "",
    price: "",
    image_url: ""
  }
  fetch(`http://localhost:9292/inventories/${id}`,{
    method: "PATCH",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(updateInventory)

  }).then(res => res.json())
    .then(setHatData)
}


  return (
    <div className='App'>

      <NavBar/> 
        <Switch>
          <Route  exact path= '/'>
            <Home/>
          </Route>
          <Route path ="/Inventory">
            <InventoryContainer hatData={hatData} setHat={setHatData} onDeleteHat={handleDeleteHat} updateHat={updateHat}/>
          </Route>
          
          <Route  path="/Stores">
            <StoreCardContainer storeData={storeData} setStoreData={setStoreData}/>
          </Route>
          <Route path="*">
             <h1>404 Not Found</h1>
          </Route>
        </Switch>
    </div>
  )
}

export default App;
