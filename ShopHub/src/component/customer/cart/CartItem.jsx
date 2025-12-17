import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex items-center gap-4">
        <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded" />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
        </div>
      </div>


      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <button onClick={() => onDecrement(item.id)} className="p-1 border rounded"><Minus size={16} /></button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)} className="p-1 border rounded"><Plus size={16} /></button>
        </div>
        <button onClick={() => onRemove(item.id)} className="text-red-500"><Trash2 size={18} /></button>
      </div>

      <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};





export default CartItem;