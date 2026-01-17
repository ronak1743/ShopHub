import React from "react";


function SellerSidebar({activePage,setActivePage}){
    return(

      <aside className="w-65 bg-white border-r p-4">
        <h2 className="text-2xl font-bold mb-8">ShopHub</h2>

          <nav className="space-y-2">
             <MenuItem label="Dashboard" 
             active={activePage === "Dashboard"}
              onClick={() => setActivePage("Dashboard")} />

            <MenuItem label="MyProducts" 
             active={activePage === "MyProducts"}
              onClick={() => setActivePage("MyProducts")} />

            <MenuItem label="Add Product" 
              active={activePage === "Add Product"}
              onClick={() => setActivePage("Add Product")}/>

            <MenuItem label="Orders" 
              active={activePage === "Orders"}
              onClick={() => setActivePage("Orders")}

            />
            <MenuItem label="Notifications" 
              active={activePage === "Notifications"}
              onClick={() => setActivePage("Notifications")}

            />
          </nav>
    </aside>
    )
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






export default SellerSidebar