import React from 'react';
import Inventory from './Inventory';

function InventoryContainer({hatData}) {
    return (
        <div>
            {
                hatData.map(hat => <Inventory hat={hat} key={hat.id}/>)
            }
        </div>
    );
}

export default InventoryContainer;