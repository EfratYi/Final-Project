import React, { useState, useEffect } from 'react';
import '../css/public.css'; // נוודא שאנחנו טוענים את קובץ ה-CSS שלנו

const Order = ({ order }) => {
    const [show, setShow] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);

    const handleShowDetails = (orderId) => {
        if (!show) {
            fetch(`http://localhost:3000/orders/${orderId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(data => {
                console.log('Received order details:', data);
                setOrderDetails(data[0]);
                console.log('Received order details:', data);
                setShow(true);
            })
            .catch(err => console.error('Error fetching order details:', err));
        } 
        setShow(!show);
    };
    

    return (
        <div className="order-container">
            <p className="order-id">מספר הזמנה: {order.id}</p>
            <p className="order-name">שם: {order.name}</p>
            <p className="order-model">שם שמלה: {order.model}</p>
            <p className="order-wedding-date">תאריך חתונה: {order.weddingDate}</p>
            <p className="order-return-date">תאריך החזרת שמלה: {order.returnDate}</p>
            <button type="button" className="show-button" onClick={() => handleShowDetails(order.id)}>
                Show
            </button>
            {show && orderDetails &&
            
                <div className="order-details">
                
                    <p>מספר הזמנה: {orderDetails.id}</p>
                    <p>ת.ז לקוחה: {orderDetails.userId}</p>
                    <p>שם: {orderDetails.name}</p>
                    <p>פלאפון 1: {orderDetails.phone1}</p>
                    <p>פלאפון 2: {orderDetails.phone2}</p>
                    <p>מייל: {orderDetails.email}</p>
                    <p>תאריך חתונה: {orderDetails.weddingDate}</p>
                    <p>תאריך החזרת שמלה: {orderDetails.returnDate}</p>
                    <p>שם שמלה: {orderDetails.model}</p>
                    <p>תיקונים ראשונים: {orderDetails.repairs}</p>
                    <p>אביזרים: {orderDetails.accessories}</p>
                </div>
            }
        </div>
    );
};

export default Order;
