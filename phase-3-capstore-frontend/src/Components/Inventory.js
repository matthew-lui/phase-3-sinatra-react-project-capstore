import React, {useState} from "react"

const headers = {
    Accepts: "application/json",
          "Content-Type" : "application/json"}

function Inventory({hat, onDeleteHat}) {
    const [hatData, setHatData] = useState(hat)
    function updateHatLikes() {
        fetch(`http://localhost:9292/inventories/${hat.id}`, {
          method: "PATCH",
          headers,
          body: JSON.stringify({ likes: hat.likes + 1 }),
        }).then((r) =>r.json())
        .then(((data)=>{
            setHatData({...data})
        }))
    }

    console.log(hatData)
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
                    <h3 className="hat_names">{hatData.hat_name}</h3>
                    <img className="hat_images" src={hatData.image_url}/>
                    <p><b>Price:</b> ${hatData.price}</p> 
                    <p><b>Quantity:</b> {hatData.quantity}</p>
                    <p><b>Description:</b> {hatData.description}</p>
                    <p>Total  {hatData.likes}🧢</p>
                    <button className="button-85"onClick={()=>handleDelete(hatData.id)}>Delete</button> <button onClick={()=>updateHatLikes(hatData)}className="button-85"> +🧢</button>
                </li>
            </ul>

        </>
    )



}

export default Inventory