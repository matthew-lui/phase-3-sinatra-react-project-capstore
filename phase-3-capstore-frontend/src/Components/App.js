import '../App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Switch, Route } from 'react-router-dom'
import StoreCardContainer from './StoreCardContainer';
import InventoryContainer from './InventoryContainer';
import InventoryShow from './InventoryShow';
import Search from './Search'
import Home from './Home'

const API = "http://localhost:9292/stores"
const API2 = "http://localhost:9292/inventories"
const headers = {
  Accepts: "application/json",
  "Content-Type": "application/json"
}

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

    fetch(API2)
      .then(res => res.json())
      .then(arrayOfHatData =>
        setHatData(arrayOfHatData)
      );

  }, [])



  function handleDeleteHat(id) {
    const updateHatArray = hatData.filter(hats => hats.id !== id)
    setHatData(updateHatArray)
  }


  // search

  const [searchText, setSearchText] = useState("")

  const filteredHats = hatData.filter((eachHatObj) => { 
    return eachHatObj.hat_name.toLowerCase().includes(searchText.toLowerCase())
  })

  // will now need to replace hatData with filteredHats...

  function handleDeleteStore(id) {
    const updateStoresArray = storeData.filter(store => store.id !== id)
    setStoreData(updateStoresArray)
  }




  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/Inventory">
          <Search searchText={searchText} setSearchText={setSearchText} />
          <InventoryContainer hatData={filteredHats} setHat={setHatData} onDeleteHat={handleDeleteHat}  />

        </Route>
        
          <Route path="/Inventory/:id">
            <InventoryShow />
          </Route>

        <Route path="/Stores">
          <StoreCardContainer storeData={storeData} setStoreData={setStoreData} onDeleteStore={handleDeleteStore} />
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
