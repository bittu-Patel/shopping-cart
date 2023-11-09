'use client'

import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

export default function ShippingAddressPage() {
    const {
        handleSubmit,
        register,
        formState: { error },
        setValue,
    } = useForm()
    const router = useRouter()
    const dispatch = useDispatch
    }
