import { data } from "@/utils/data";

export default function ProductDetailPage({ params: { id } }) {
    const product = data.products.find(x=>x.id=== id)
    if(!product) {
        return <div>Product Not Found</div>
    }
return (
   <div className="py-2">
<l


   </div>
)

}