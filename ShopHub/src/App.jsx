import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShopHubAuthPage from './component/ShopHubAuthPage'
import { Sidebar } from 'lucide-react'
import CustomerPage from './component/customer/CustomerPage'

function App() {

  return (
    <>
      <CustomerPage/>

      {/* <Sidebar/> */}
    </>
  )
}

export default App