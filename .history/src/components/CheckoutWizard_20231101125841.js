export default function CheckoutWizard({activeStep = 0 }) {
return(
 <div className="mb-5 flex flex-wrap">
    {['user Login', 'Shipping Address', 'payment Method', 'Place Order'].map(
    (step, inde)
   
)  }

 </div>   
)
}