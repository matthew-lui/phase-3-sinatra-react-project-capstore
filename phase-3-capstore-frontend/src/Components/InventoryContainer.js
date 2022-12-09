import React, { useState } from 'react';
import Inventory from './Inventory';

function InventoryContainer({ hatData, setHat, onDeleteHat}) {
    let initialForm = {
        hat_name: "",
        image_url:"",
        quantity: "",
        description: "",
        price: ""
    }
    const [form, setForm] = useState(initialForm)
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:9292/inventories", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }).then(response => response.json())
            .then(data => {
                setForm(initialForm)
                setHat([...hatData, data]) })

    }
    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setForm({...form, [name]:value })
    }
    return (
        <div>
            <h2>Inventory</h2>

            <h3>Add Item to Inventory</h3>
            <form id="form" onSubmit={handleSubmit}>
                <input className="input_field" value={form.hat_name} placeholder="Hat name" name="hat_name" type="text" onChange={handleChange} />
                <input className="input_field" value={form.price} placeholder="Price" name="price" type="number" onChange={handleChange} />
                <input className="input_field" value={form.quantity} placeholder="Quantity" name="quantity" type="number" onChange={handleChange} />
                <input className="input_field" value={form.image_url} placeholder="Image URL" name="image_url" type="text" onChange={handleChange} />
                <input id="desc" className="input_field" value={form.description} placeholder="Description" name="description" type="text" onChange={handleChange} />
                <button id="submit_btn" className="button-85">Add Hat</button>
                <br/>
            </form>

            <h3>All Items</h3>
                <ul id="hat_container">
                    {
                        hatData.map(hat => <Inventory hat={hat} key={hat.id} setHat={setHat} onDeleteHat={onDeleteHat}/>)
                    }
                </ul>
        </div>
    );
}

export default InventoryContainer;
