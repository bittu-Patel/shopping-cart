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
        setValue('fullName', ShippingAddress.fullName)
        export default function CheckoutWizard({ activeStep = 0 }) {
            return (
              <div className="mb-5 flex flex-wrap">
                {['User Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
                  (step, index) => (
                    <div
                      key={step}
                      className={`flex-1 border-b-2  
                        text-center 
                    ${
                      index <= activeStep
                        ? 'border-indigo-500   text-indigo-500'
                        : 'border-gray-400 text-gray-400'
                    }
                        
                    `}
                    >
                      {step}
                    </div>
                  )
                )}
              </div>
            )
          }
    })
    }
