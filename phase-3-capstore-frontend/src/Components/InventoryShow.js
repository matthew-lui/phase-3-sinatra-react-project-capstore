import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function InventoryShow() {
    const param = useParams()
    const [hat, setHat] = useState({description:[]})
    useEffect(() => {
        fetch(`http://localhost:9292/inventory/${param.id}`)
            .then(r => r.json())
            .then(setHat)
    }, [])
    let initialForm ={
        comment: "",
    }

    const [form, setForm] = useState(initialForm)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:9292/inventories/${param.id}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(form),
    }).then(r => r.json())
      .then(data => {
        setForm(initialForm)
        setHat( {...hat, description:[...hat.description, data ]} )})
      }

      let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({...form, [name]: value}) 
    }


    return (
        <div>
           
           <img className="review-image" src={hat.image} alt="reviews"/>
           <p className="review-page">{hat.description}</p>
           <form id="form" onSubmit={handleSubmit}>
               <input value={form.review} placeholder= "leave a review!" name= "comment" type="text" onChange={handleChange} />
               <button className="review-btn" id="addReviewBtn">Add Review</button>
               {hat.reviews.map(review => <p className="review-page">{review.comment}</p>)}
           </form>
       </div>
   )
            
}

export default InventoryShow;