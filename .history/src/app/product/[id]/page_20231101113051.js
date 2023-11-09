import { data } from "@/utils/data";
import Link from "next/link";

export default function ProductDetailPage({ params: { id } }) {
    const product = data.products.find(x=>x.id=== id)
    if(!product) {
        return <div>Product Not Found</div>
    }
return (
   <><div className="py-2">
        <Link href="/">Back To Product</Link>
    </div><div className="grid md:grid-cols-4">

        </div></>
)

}