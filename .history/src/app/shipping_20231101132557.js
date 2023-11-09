'use client'

import { saveShippingAddress } from "@/redux/slices/cartSlice"
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
        setValue('fullName', ShippingAddress.fullName)
        setValue('address', ShippingAddress.address)
        setValue('city', ShippingAddress.city)
        setValue('postalCode', ShippingAddress.postalCode)
        setValue('country', ShippingAddress.country)
    }, [setValue, ShippingAddress])
        
    const submitHandler = ({
fullName,
address,
city,
postalCode,
country,
    }) => {
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        )
        router.push('/payme')
    }
    }
