import React from 'react';
import '../css/public.css'; 
const Accessory = ({ accessory }) => {
    return (
        <div className="accessory-container">
            <h3 className="accessory-id">אביזר מספר {accessory.id}</h3>
            <p className="accessory-type">{accessory.type}</p>
        </div>
    );
}

export default Accessory;
