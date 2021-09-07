import React, { Component, Fragment } from 'react'

import CardProduct from './CardProduct/CardProduct';

import "./Product.css";
import companyLogo from "../../../assets/companyLogo.png";
import cartIcon from "../../../assets/cartIcon.jpg";


class Product extends Component {
    state = {
        order: 1,
        stock: 5,
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })

    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.order > this.state.stock){
            return false;
        }
        return true;
    }
    
  
      
    render() {
        return (
           <Fragment>
               <p>Halaman Product</p>
               <hr />
               <div className="header">
                   <div className="logo">
                       <img src={companyLogo} alt="logo" />
                   </div>
                   <div className="trolley">
                       <img src={cartIcon} alt="trolley" />
                       <div className="count">{this.state.order}</div>                   
                   </div>
               </div>               
               <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
           </Fragment>
        )
    }
}

export default Product;
