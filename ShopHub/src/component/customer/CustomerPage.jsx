import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import TopBar from "./TopBar";
import Sidebar from "./Sidebar";
import BrowseHeader from "./BrowseHeader";
import BrowseProducts from "./BrowseProducts";

function CustomerPage() {
  const { user } = useUser(); // ✅ REAL USER FROM SESSION

  const [product, setproduct] = useState([]);
  const [allproduct, setallproduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/getproducts")
      .then(res => res.json())
      .then(data => {
        setproduct(data);
        setallproduct(data);
      });
  }, []);

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden">
      <Sidebar />

      <main className="flex-1 h-screen flex flex-col bg-slate-100">
        <div className="sticky top-0 z-30 bg-slate-100 px-6 pt-6">
          <TopBar user={user} /> {/* 🔥 REAL USER */}
        </div>

        <div className="sticky top-[72px] z-20 bg-slate-100 px-6 pb-4">
          <BrowseHeader allproduct={allproduct} setproduct={setproduct} />
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <BrowseProducts products={product} />
        </div>
      </main>
    </div>
  );
}

export default CustomerPage;
