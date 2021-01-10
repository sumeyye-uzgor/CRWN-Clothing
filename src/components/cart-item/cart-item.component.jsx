import React from 'react'

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item" />
        <ItemDetailsContainer>{name}</ItemDetailsContainer>
        <ItemDetailsContainer>{quantity} x ${price}</ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;
