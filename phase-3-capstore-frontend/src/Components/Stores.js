import React, {useState} from "react"

function Stores({store}) {
    return (
        <>
          
            <h3>Store Name: {store.store_name}</h3>
            <h4>Address{store.address}</h4>
            <h4>Phone Number {store.phone_number}</h4>
           
        </>
    )

}

export default Stores