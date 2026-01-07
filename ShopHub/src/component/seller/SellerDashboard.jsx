import React, { useEffect, useState } from "react";
import Sidebar from "../customer/Sidebar";
import SellerSidebar from "./SellerSidebar";
import TopBar from "../customer/TopBar";

function SellerDashboard(){
    const [activePage,setActivePage]=useState("Dashboard");
    const {user}=useState();
    const [dash,setDash]=useState({
      income:0,
      pending:0,
      totalOrder:0,
      products:0,
    });

    useEffect(()=>{

      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:8888/seller/dash", {
            credentials: "include",
          });
          const data = await res.json();
          setDash(data);
        } catch (err) {
          console.error("Fetch error:", err);
        }
      };
      
      fetchData();
    
    },[]);

    return(
        <>
        <div className="flex h-screen bg-slate-100 overflow-hidden">
      <SellerSidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-1 h-screen flex flex-col bg-slate-100">
        <div className="sticky top-0 z-30 bg-slate-100 px-6 pt-6">
          <TopBar user={user} />

        </div>

        

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div>
        <h2 className="text-2xl font-semibold">Seller Dashboard</h2>
        <p className="text-gray-500 mt-1">
          Overview of your store performance
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">


        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Total Products</p>


            <div className="p-2 rounded-full bg-blue-100 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="w-6 h-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mt-4">{dash.products}</h3>
        </div>


        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Total Orders</p>


            <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="w-6 h-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9m-6-9v9" />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mt-4">{dash.totalOrder}</h3>
        </div>


        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Total Revenue</p>


            <div className="p-2 rounded-full bg-green-100 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="w-6 h-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .843-3 1.875S10.343 11.75 12 11.75s3 .843 3 1.875S13.657 15.5 12 15.5m0-7.5V5m0 10.5V19" />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mt-4">$ {dash.income}</h3>
        </div>

        <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-sm">Pending Orders</p>

            <div className="p-2 rounded-full bg-orange-100 text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="w-6 h-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 17l6-6 4 4 8-8" />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-semibold mt-4">{dash.pending}</h3>
        </div>

      </div>
        </div>
      </main>
    </div>
        </>
    )
}





export default SellerDashboard;