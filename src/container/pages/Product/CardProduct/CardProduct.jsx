import React, { Component } from 'react'
import productImgDagingAyam from "../../../../assets/productImgDagingAyam.jpeg";

class CardProduct extends Component {
    state = {
        order: 1,
        price: 410000,
        stock: 5
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => this.handleCounterChange(this.state.order))
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => this.handleCounterChange(this.state.order))
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.order > this.state.stock){
            return false;
        }
        return true;
    }
    
    render() {
        const newPrice = this.state.order * this.state.price;
        return (                        
               <div className="card">
                   <div className="img-thumb-prod">
                       <img src={productImgDagingAyam} alt="daging-ayam-berbumbu" />
                   </div>
                   <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                   <small>Stock: {this.state.stock}</small>
                   <p className="product-price">Rp. {newPrice.toLocaleString("id-ID")}</p>
                   <div className="counter">
                       <button className="minus" onClick={this.handleMinus}>-</button>
                       <input type="text" value={this.state.order} />
                       <button className="plus" onClick={this.handlePlus}>+</button>

                   </div>
               </div>           
        )
    }
}

export default CardProduct;