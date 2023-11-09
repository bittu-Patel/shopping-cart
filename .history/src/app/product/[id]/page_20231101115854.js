import ProductRate from "@/components/ProductRate";
import { data } from "@/utils/data";
import Image from "next/image";
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
<div className="md:col-span-2">
<Image
src={product.image}
alt={product.name}
width={640}
height={640}
sizes="100vw"
style={{
   width: '100%',
   height: 'auto',
}}
></Image>
</div>
<div>
    <ul>
        <li>
            <h1 className="text-lg">{product.name}</h1>
        </li>
        <li>
            <ProductRate
        </li>
    </ul>

</div>
        </div>
        </div>
)

}