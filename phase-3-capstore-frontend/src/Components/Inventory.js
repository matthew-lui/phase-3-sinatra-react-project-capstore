import React, {useState} from "react"

const headers = {
    Accepts: "application/json",
          "Content-Type" : "application/json"}

function Inventory({hat, onDeleteHat}) {

    function handleDelete(id){
        onDeleteHat(id)
        fetch(`http://localhost:9292/inventories/${id}`,{
            method: 'DELETE',
            headers,
        })
    }


    return (

        <>
            <ul>
                <li>
                    <h3>${hat.price} {hat.quantity} <img className="hat_images" src={hat.image_url}/> {hat.hat_name} {hat.description} </h3>
                    <button class="button-29"onClick={()=>handleDelete(hat.id)}>Delete</button><button class="button-29">edit</button>
                </li>
            </ul>

        </>
    )



}

export default Inventory