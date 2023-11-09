'use client'

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
        dispatch(addToCartHandler(id))
    }
}