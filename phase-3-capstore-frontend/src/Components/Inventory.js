import React from "react"

const headers = {
    Accepts: "application/json",
          "Content-Type" : "application/json"}

function Inventory({hat, onDeleteHat, updateHat}) {
    console.log(hat)

    function handleDelete(id){
        onDeleteHat(id)
        fetch(`http://localhost:9292/inventories/${id}`,{
            method: 'DELETE',
            headers,
        })
    }


    return (

        <>
            <ul id="hat_container">
                <li className="list_items">
                    <h3 className="hat_names">{hat.hat_name}</h3>
                    <img className="hat_images" src={hat.image_url}/>
                    <p><b>Price:</b> ${hat.price}</p> 
                    <p><b>Quantity:</b> {hat.quantity}</p>
                    <p><b>Description:</b> {hat.description}</p>
                    <p>Total  {hat.likes}🧢</p>
                    <button className="button-85"onClick={()=>handleDelete(hat.id)}>Delete</button> <button onClick={()=>updateHat(hat)}className="button-85"> +🧢</button>
                </li>
            </ul>

        </>
    )



}

export default Inventory