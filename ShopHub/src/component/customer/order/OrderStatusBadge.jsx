function OrderStatusBadge({ status }) {
const base = "px-3 py-1 rounded-full text-sm font-medium";


const styles = {
Delivered: "bg-green-100 text-green-700",
Shipped: "bg-purple-100 text-purple-700",
Pending: "bg-yellow-100 text-yellow-700",
};


return <span className={`${base} ${styles[status]}`}>{status}</span>;
}







export default OrderStatusBadge;