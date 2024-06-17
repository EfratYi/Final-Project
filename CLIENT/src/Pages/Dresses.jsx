import React, { useState, useEffect } from 'react';
import GenericChanges from '../Components/GenericChanges';
import Dress from '../Components/Dress';

const Dresses = () => {
    const [dresses, setDresses] = useState([]);
    const dressData = {
        model: "",
        price: "",
        uses: "",
        advancePayment: ""
    }
    useEffect(() => {
        fetch(`http://localhost:3000/dresses`)
        .then((res) => res.json())
        .then((data) => {
            setDresses([...data]);
        })
        .catch((error) => console.error('Error fetching dresses:', error));
    }, []);

    const handleSave = (dress, func) => {
        fetch('http://localhost:3000/dresses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dress),
        })
            .then(res => res.json())
            .then(data => {
                setDresses([...data]);
            })
            .catch(err => console.error('Error adding dress:', err));
    };

return (
    <>
        <GenericChanges
            formData={dressData}
            attributesArrHe={["מודל", "מחיר", "מספר פעמים שהיתה השמלה בשימוש", "מיקדמה"]}
            attributesArrEn={["model", "price", "uses", "advancePayment"]}
            handleSave={handleSave}
            func="add"
        />
         {dresses.map((dress, index)=> <Dress key={index} dress={dress} />)}
    </>
);
}

export default Dresses
