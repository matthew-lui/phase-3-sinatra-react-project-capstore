import React, {useState} from "react"

const headers = {
    Accepts: "application/json",
          "Content-Type" : "application/json"}

function Stores({store, onDeleteStore}) {

    function handleDeleteStore(id){
        onDeleteStore(id)
        fetch(`http://localhost:9292/stores/${id}`,{
            method: 'DELETE',
            headers,
        })
    }

    return (
        <div id="storesContainer"> 
            <h3>Store Name: {store.store_name}</h3>
            <h4>Address {store.address}</h4>
            <h4>Phone Number {store.phone_number}</h4>
            <button className="button-85"onClick={()=>handleDeleteStore(store.id)}>Delete Store</button>
        </div>
    )

}

export default Stores