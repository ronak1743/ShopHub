import React, { use, useEffect } from 'react';
import { useState } from 'react';
import OrderCard from './OrderCard';

const demoOrders = [
{
id: 1,
name: "Wireless Bluetooth Headphones",
qty: 2,
date: "Jan 20, 2024",
price: "$299.98",
status: "Delivered",
image: "https://via.placeholder.com/80/FFD84D/000000?text=🎧",
},
{
id: 2,
name: "Smart Watch Pro",
qty: 1,
date: "Jan 22, 2024",
price: "$299.99",
status: "Shipped",
image: "https://via.placeholder.com/80/E5E5E5/000000?text=⌚",
},
{
id: 3,
name: "Portable Power Bank",
qty: 3,
date: "Jan 25, 2024",
price: "$149.97",
status: "Pending",
image: "https://via.placeholder.com/80/2F4F4F/FFFFFF?text=🔋",
},
];


function OrderList({Orders}) {
    
return (
    <div className="space-y-4">
      {Orders.length === 0 ? (
        <p className="text-gray-500">No orders found</p>
      ) : (
        Orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))
      )}
    </div>
  );
}






export default OrderList;