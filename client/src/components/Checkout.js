import React,{useState} from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function Checkout() {
    
    const apiKey = "pk_test_51MkHJFKaCYYw7wRM5X5ZU0FO72OiRzUAfuLtmGU8aYybZoeXiPjbH3DRIkE9w5NWOac4dnPbBJMtJrUrg3obSYZo00N2fmSbcn"
    const [product] = useState({
        name: "Example Product",
        price: 19.99,
      });
    
      const handleToken = async (token) => {
        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
             "Authorization" : apiKey
          },
          
          body: JSON.stringify({
            token,
            product,
          }),
        });
        const data = await response.json();
        console.log(data); 
        
      };
    
      return (
        <div>
          <h1>{product.name}</h1>
          <h3>Price: ${product.price}</h3>
          <StripeCheckout
            stripeKey={apiKey}
            token={handleToken}
            amount={product.price * 100}
            name={product.name}
            billingAddress
            shippingAddress
           
          />
        </div>
      );
}
