import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
               <img
                className="checkout__ad"
                src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg"
               alt=""
               />
               {basket?.length === 0 ? ( 
               <div>
                   <h3> Hello, {!user ? 'Guest' : user.email}</h3>
                   <h2>Your shopping basket is empty</h2>
               </div>
               ) : (
              <div>
                   <h2 className="checkout__title">Your shopping Basket
                   </h2>

                   {basket?.map(item => (
                       <CheckoutProduct 
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       hideButton
                       />
                   ))}
                  </div>
                   )}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
