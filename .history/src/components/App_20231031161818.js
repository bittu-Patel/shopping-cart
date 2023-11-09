'use client'

import { useEffect } from "react"
import CartSidebar from "./CartSidebar"
import Header from "./Header"

export default function App({ children }) {
useEffect(() => {})

    return(
        <div className="mr-32">
            <Header />
<main className="p-4">{children}</main>
       
        <CartSidebar />
        </div>
    )
}