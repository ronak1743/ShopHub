const CartSummary = ({ total }) => {
  return (
    <div className="flex justify-end items-center mt-6 gap-6">
      <p className="text-xl font-bold">Total ${total.toFixed(2)}</p>
      <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg">
        Checkout
      </button>
    </div>
  );
};







export default CartSummary;
