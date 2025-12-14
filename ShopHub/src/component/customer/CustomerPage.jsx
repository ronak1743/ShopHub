import TopBar from "./TopBar"
import Sidebar from "./Sidebar"
import BrowseProducts from "./BrowseProducts"

function CustomerPage(){
    const user={
        name: "Demo User",
        role: "customer",
    }

    const product={
        name:"p1",
        description:"d1",
        price:10,

    }
    return(
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />
            <main className="flex-1 p-6">
                <TopBar user={user} />
                <BrowseProducts products={[product]} />
            </main>
        </div>
    )
}



export default CustomerPage;