import React, { useEffect, useState } from "react";
import Sidebar from "../customer/Sidebar";
import SellerSidebar from "./SellerSidebar";
import TopBar from "../customer/TopBar";
import Dashboard from "./Dashboard";
import AddProduct from "./AddProduct";
import MyProducts from "./MyProducts";

function SellerDashboard(){
    const [activePage,setActivePage]=useState("Dashboard");
    const {user}=useState();
    

    return(
      <>
        <div className="flex h-screen bg-slate-100 overflow-hidden">
          <SellerSidebar activePage={activePage} setActivePage={setActivePage} />

          <main className="flex-1 flex flex-col bg-slate-100 overflow-hidden">
            <div className="sticky top-0 z-30 bg-slate-100 px-6 pt-6">
              <TopBar user={user} />

            </div>

            {activePage==="Dashboard" && <Dashboard/>}
            {activePage==="Add Product" && <AddProduct/>}
            {activePage==="MyProducts" && <MyProducts setActivePage={setActivePage}/>}
            {activePage==="Orders" && <div>Orders</div>}
            {activePage==="Notifications" && <div>Notifications</div>}

        
          </main>
        </div>
      </>
    )
}





export default SellerDashboard;