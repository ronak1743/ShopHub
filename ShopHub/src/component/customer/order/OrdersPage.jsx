import React from 'react';
import OrderList from './OrderList';

function OrdersPage() {
return (
<div className="p-6">
<h1 className="text-2xl font-bold mb-1">My Orders</h1>
<p className="text-gray-500 mb-6">Track your order status</p>


<OrderList />
</div>
);
}




export default OrdersPage;