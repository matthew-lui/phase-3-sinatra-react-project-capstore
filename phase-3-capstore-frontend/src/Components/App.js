import '../App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import StoreCardContainer from './StoreCardContainer';
import Home from './Home'
import Stores from './Stores';
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

  return (
    <div className='App'>

      <NavBar/> 
        <Switch>
          <Route  exact path= '/'>
            <Home/>
          </Route>
         
         
      
          <Route path ="/Inventory">
            <InventoryContainer hatData={hatData} setHat={setHatData} onDeleteHat={handleDeleteHat}/>
          </Route>
          
          <Route  path="/Stores">
            <Stores/>
          </Route>
          
          
            
         
        
        </Switch>
    </div>
  )
}

export default App;
