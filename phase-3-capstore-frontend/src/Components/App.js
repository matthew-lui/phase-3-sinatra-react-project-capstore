// import logo from './logo.svg';
import '../App.css';
import React, {useEffect, useState} from 'react';
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom'
import InventoryForm from './InventoryForm';
import StoreCardContainer from './StoreCardContainer';
import Home from './Home'
import Stores from './Stores';
import Inventory from './Inventory';
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
  // console.log(storeData)

  useEffect(() => {
    fetch(API2)
    .then(res => res.json())
    .then(arrayOfHatData => 
      setHatData(arrayOfHatData)
      );
  }, [])
// console.log(hatData)




// const allTheHats = hatData.map((hatObj) => {
//   return <Inventory hatObj={hatObj} key={hatObj.id}/>
// })

// console.log(allTheHats)

//not sure if this is working! 

  return (
    <div className='App'>

      <NavBar/> 
        <Switch>
          <Route  exact path= '/'>
            <Home/>
          </Route>
         
         
      
          <Route path ="/Inventory">
            <InventoryContainer hatData={hatData}/>
          </Route>
          
          <Route  path="/Stores">
            <Stores/>
          </Route>
          
          
            
         
        
        </Switch>
    </div>
  )
}

export default App;
