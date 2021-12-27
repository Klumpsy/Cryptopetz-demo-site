import React from 'react'
import { useState } from 'react'

function CurrentSale() {
    const [currentSale, setCurrentSale] = useState(false); 

    return (
        <>
        {
            currentSale ? 
            <div>
        
            </div>
            :
            <div className = "no-sale-background">
                <h2>Currently there are no sales</h2>
            </div>
        }
        </>
    )
}

export default CurrentSale
