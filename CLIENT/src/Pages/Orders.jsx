import React, { useState, useEffect } from 'react';
import Order from "../Components/Order";
import '../css/public.css'; 
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3000/orders`)
          .then((res) => res.json())
          .then((data) => {
              setOrders([...data]);
          })
          .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
      <>
          <h2 className="orders-title">כל ההזמנות</h2>
          <div className="orders-container">
              {orders.map((order, index) => (
                  <Order key={index} order={order} />
              ))}
          </div>
      </>
  );
};
export default Orders;