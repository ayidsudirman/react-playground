import React, { Component, Fragment } from 'react'
import CardProduct from '../CardProduct/CardProduct';
import "./Product.css";

export default class Product extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })

    }
  
      
    render() {
        return (
           <Fragment>
               <div className="header">
                   <div className="logo">
                       <img src="https://etanee.id/static/media/etanee-frozen-white.b6c98c0d.png" alt="logo" />
                   </div>
                   <div className="trolley">
                       <img src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-16.jpg" alt="trolley" />
                       <div className="count">{this.state.order}</div>                   
                   </div>
               </div>               
               <CardProduct onCounterChange={(value)=> this.handleCounterChange(value)}/>
           </Fragment>
        )
    }
}