import React,{useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../store/cart-context';

const Cart = (props) => {
    const cartContext = useContext(CartContext);
    let totalAmount=0;

    const hasItems=cartContext.items.length>0;

    cartContext.items.forEach(item =>{
        Math.floor(totalAmount= totalAmount+ (item.price));
})
    
    const cartItemRemoveHandler = (item) => {
        if(item.quantity > 1 ){
            cartContext.addItem({...item,quantity:-1})
            }
            else
            cartContext.removeItem(item)
    };
    
    const cartItemAddHandler = (item) => {

        cartContext.addItem({ ...item,quantity:1})
    };


    const cartItems = (
    <ul className={classes['cart-items']}>
        {cartContext.items.map((item) => (
        <CartItem key = {item.id}
        name = {item.name}
        amount = {item.amount} 
        price = {item.price} 
        onRemove={cartItemRemoveHandler.bind(null,item)}
        onAdd={cartItemAddHandler.bind(null,item)}
        /> ))} </ul>
    );
    

    return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick ={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
    );
};

export default Cart;