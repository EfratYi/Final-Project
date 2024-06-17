import React, { useState, useEffect } from 'react';
import GenericChanges from '../Components/GenericChanges';
import Accessory from '../Components/Accessory';
import '../css/public.css'; 
const Accessories = () => {
    const [accessories, setAccessories] = useState([]);
    const accessoryData = {
        type: ""
    }
    useEffect(() => {
        fetch(`http://localhost:3000/accessories`)
        .then((res) => res.json())
        .then((data) => {
            setAccessories([...data]);
        })
        .catch((error) => console.error('Error fetching accessories:', error));
    }, []);

    const handleSave = (accessory, func) => {
        console.log(accessory)
        fetch('http://localhost:3000/accessories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accessory),
        })
            .then(res => res.json())
            .then(data => {
                setAccessories([...data]);
            })
            .catch(err => console.error('Error adding accessory:', err));
    };
    return (
        <>
            <h2 className="accessories-title">אביזרים</h2>
            <GenericChanges
                formData={accessoryData}
                attributesArrHe={["סוג האביזר"]}
                attributesArrEn={["type"]}
                handleSave={handleSave}
                func="add"
            />
            <div className="accessories-container">
                {accessories.map((accessory, index)=> <Accessory key={index} accessory={accessory} />)}
            </div>
        </>
    );
}

export default Accessories;
