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
          body: JSON.stringify({ likes: ++hat.likes }),
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
        <div className="hat-background">
            <fieldset className="fieldset">

                <li className="list_items">
                    <h3 className="hat_names">{hatData.hat_name}</h3>
                    <img className="hat_images" src={hatData.image_url}/>
                    <p className="hat_names"><b>Price:</b> ${hatData.price}</p> 
                    <p className="hat_names"><b>Quantity:</b> {hatData.quantity}</p>
                    <p className="hat_names"><b>Description:</b> {hatData.description}</p>
                    <p className="hat_names">Total  {hatData.likes}🧢</p>
                    <button className="button-85"onClick={()=>handleDelete(hatData.id)}>🗑</button> <button onClick={()=>updateHatLikes(hatData)}className="button-85"> +🧢</button>
                </li>
                </fieldset>
        </div>
    )



}

export default Inventory