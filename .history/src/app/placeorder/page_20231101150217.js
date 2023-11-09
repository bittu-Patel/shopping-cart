import { useRouter } from "next/router";
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
    
}