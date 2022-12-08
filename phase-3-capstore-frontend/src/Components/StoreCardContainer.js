import React, {useState} from "react"
import Stores from './Stores'

function StoreCardContainer({storeData, setStoreData, onDeleteStore}) {
        let initialStoreForm = {
            store_name: "",
            address:"",
            phone_number: ""
        }
        const [storeForm, setStoreForm] = useState(initialStoreForm)
        const handleSubmit = (e) => {
            e.preventDefault()
            fetch("http://localhost:9292/stores", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(storeForm)
            }).then(response => response.json())
                .then(data => {
                    setStoreForm(initialStoreForm)
                    setStoreData([...storeData, data])
                })
    
        }
        let handleChange = (e) => {
            let name = e.target.name
            let value = e.target.value
            setStoreForm({
                ...storeForm,
                [name]:value
            })
        }
return (
    <>
    <div>
            <h2>Our Stores</h2>

            <h3>Add Store</h3>
            <form id="form" onSubmit={handleSubmit}>
                <input value={storeForm.store_name} placeholder="store name" name="store_name" type="text" onChange={handleChange} />
                <input value={storeForm.address} placeholder="address" name="address" type="text" onChange={handleChange} />
                <input value={storeForm.phone_number} placeholder="phone number" name="phone_number" type="number" onChange={handleChange} />
                <button className="button-85" id="addStoreBtn">Add Store</button>
            </form>

            <h3>All Stores</h3>
            {
                storeData.map(store => <Stores store={store} key={store.id} onDeleteStore={onDeleteStore}/>)
            }
        </div>
    </>
)
}

export default StoreCardContainer