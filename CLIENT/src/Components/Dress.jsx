import React from 'react';

const Dress = ({ dress }) => {
    return (
        <>
            <div>
                <h3>שמלה מספר {dress.id}</h3>
                <p>{dress.model}</p>
                <p>{dress.price}</p>
                <p>{dress.uses}</p>
                <p>{dress.advancePayment}</p>
            </div>
        </>
    )
}
export default Dress