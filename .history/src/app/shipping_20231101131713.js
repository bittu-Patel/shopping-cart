'use client'

import { useRouter } from "next/router"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

export default function ShippingAddressPage() {
    const {
        handleSubmit,
        register,
        formState: { error },
        setValue,
    } = useForm()
    const router = useRouter()
    const dispatch = useDispatch()
    const { ShippingAddress } = useSelector((state) => state.cart)

    useEffect(() => {
        setValue('full')
    })
    }
