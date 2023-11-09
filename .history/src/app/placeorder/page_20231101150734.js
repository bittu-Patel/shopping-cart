import CheckoutWizard from "@/components/CheckoutWizard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function PlaceOrderScreen() {
    const {
        cartItems,
        itemsPrice,
        totalPrice,
        taxPrice,
        shippingAddress,
        paymentMethod,
        loading,
    } = useSelector((state) => state.cart)
    const router = useRouter()
   
   
    useEffect(() => {
     if(!paymentMethod) {
        router.push('/payment')
     }   
    }, [paymentMethod, router])

    return (
        <div>
    <CheckoutWizard activeStep={3} />
    <h1 className="mb-4 "></h1>

        </div>
    )
    
}