export default function BrowseHeader({allproduct,setproduct}) {

  
  const change=async (e)=>{
    if(e.target.value===null){
      setproduct(allproduct);
    }
    else{
      setproduct(allproduct.filter((x)=>x.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
  }
  return (
    <>
      <h1 className="text-3xl font-bold">Browse Products</h1>
      <p className="text-gray-500 mt-1 mb-4">
        Discover amazing products from our sellers
      </p>

      <input
        onChange={change}
        type="text"
        placeholder="Search products..."
        className="w-full max-w-3xl px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      
    </>
  );
}
