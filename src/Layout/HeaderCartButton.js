import CartIcon from "../Cart/CartIcon";
import React,{ useContext } from "react";
import CartContext from "../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    
    const cartCtx = useContext(CartContext);
    let quantity =0;
   

    // const numberofCartItems = cartCtx.items.reduce((curNumber, item)=> {
    //      return curNumber+item.amount;
    // },0)
    cartCtx.items.forEach(item =>{
            quantity= quantity+ Number(item.quantity)
    })
    return (    
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
            </span>   
        <span> Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
    </button>
    );
};

export default HeaderCartButton;