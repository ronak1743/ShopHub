import React from 'react';
import OrderStatusBadge from './OrderStatusBadge';

function OrderCard({ order }) {
return (
<div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
<div className="flex items-center gap-4">
<img
src={order.image}
alt={order.name}
className="w-20 h-20 rounded-lg object-cover"
/>


<div>
<h3 className="font-semibold text-lg">{order.name}</h3>
<p className="text-sm text-gray-500">
Qty: {order.qty} • {order.date}
</p>
<p className="text-blue-600 font-semibold mt-1">{order.price}</p>
</div>
</div>


<OrderStatusBadge status={order.status} />
</div>
);
}






export default OrderCard;