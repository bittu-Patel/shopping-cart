'use client'

import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"

export default function CartPage() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { loading,  cartItems, itemsPrice } = useSelector((state) =>)
}