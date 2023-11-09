'use client'
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

export default function CartPage() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { loading,  cartItems, itemsPrice } = useSelector((state) => state.cart)

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCartHandler(id))
    }

    const addToCartHandler = async (product. qty) => {
        dispatch(addToCart({...product, qty}))
    }
    return(
        <div>
            <h1 className="mb-4 text-xl">Shopping Cart</h1>
            {}
        </div>
    )
}