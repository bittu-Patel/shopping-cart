export default function CheckoutWizard({activeStep = 0 }) {
return(
 <div className="mb-5 flex flex-wrap">
    {['user Login', 'Shipping Address', 'payment Method', 'Place Order'].map(
    (step, index) => (
        <div 
        key={step}
        className={`flex-1 border-b-2`}
        >


           

    )
   
)  }

 </div>   
)
}