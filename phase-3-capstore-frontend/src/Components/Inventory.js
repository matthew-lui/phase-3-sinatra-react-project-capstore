import React, {useState} from "react"

function Inventory({hat}) {

    return (

        <>
            <ul>
                <li>
                    <h3>${hat.price} {hat.quantity} <img className="hat_images" src={hat.image_url}/> {hat.hat_name} {hat.description} </h3>
                    <button>Delete</button>
                </li>
            </ul>

        </>
    )



}

export default Inventory