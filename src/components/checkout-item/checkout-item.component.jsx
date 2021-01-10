import React from 'react'
import { connect } from 'react-redux'

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles'

import { addCartItem, clearItemFromCart, removeCartItem } from '../../redux/cart/cart.actions'


const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>

    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);