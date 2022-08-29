import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from '../assets/diet-o-lane.jpg';
import classes from './Header.module.css';

const Header = (props) =>{
    return <Fragment>
        <header className= {classes.header}>
            <h1> Diet-O-lane </h1>
            <HeaderCartButton onClick= {props.onShowCart}/>
        </header>
        <div className= {classes ['main-image']}>
            <img src = {mealsImage} alt="A table full of delicious Food!"/>
        </div>
    </Fragment>
};

export default Header;