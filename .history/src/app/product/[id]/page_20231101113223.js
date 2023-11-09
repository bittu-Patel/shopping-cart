import { data } from "@/utils/data";
import Link from "next/link";

export default function ProductDetailPage({ params: { id } }) {
    const product = data.products.find(x=>x.id=== id)
    if(!product) {
        return <div>Product Not Found</div>
    }
return (
   <div>
   <div className="py-2">
        <Link href="/">Back To Product</Link>
    </div>
    <div className="grid md:grid-cols-4 md:gap-3">
<div className="md:col-span">

</div>
        </div>
        </div>
)

}