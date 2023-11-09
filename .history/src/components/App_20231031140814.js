'use client'

import CartSidebar from "./CartSidebar"
import Header from "./Header"

export default function App({ children }) {
    return(
        <div className="mr-32">
            <Header />
<main className="p-4">{children}</main>
        </div>
        <CartSidebar />
    )
}