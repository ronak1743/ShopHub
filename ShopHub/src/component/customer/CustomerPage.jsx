import TopBar from "./TopBar"
import Sidebar from "./Sidebar"
import BrowseProducts from "./BrowseProducts"
import { useEffect, useState } from "react"

function CustomerPage(){
    const user={
        name: "Demo User",
        role: "customer",
    }

    const [product,setproduct]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8888/getproducts").then((res)=>res.json())
        .then((data)=>{
            setproduct(data);
            console.log(data);
        })
        
    },[]);
    
    return(
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />
            <main className="flex-1 p-6">
                <TopBar user={user} />
                <BrowseProducts products={product} />
            </main>
        </div>
    )
}



export default CustomerPage;