function Sidebar({ activePage, setActivePage }) {
  return (

<aside className="w-65 bg-white border-r p-4">
  <h2 className="text-2xl font-bold mb-8">ShopHub</h2>

      <nav className="space-y-2">
        
        <MenuItem label="Products" 
         active={activePage === "Products"}
          onClick={() => setActivePage("Products")} />
          
        <MenuItem label="Cart" 
          active={activePage === "Cart"}
          onClick={() => setActivePage("Cart")}/>

        <MenuItem label="My Orders" 
          active={activePage === "My Orders"}
          onClick={() => setActivePage("My Orders")}

        />
      </nav>
    </aside>
  );
}

function MenuItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}  
      className={`px-4 py-2 rounded-lg cursor-pointer transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </div>
  );
}







export default Sidebar;