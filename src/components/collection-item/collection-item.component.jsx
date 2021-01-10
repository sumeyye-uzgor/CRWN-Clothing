import React from 'react'
import { connect } from 'react-redux'

import {
    CollectionFooterContainer, CollectionItemContainer,
    NameContainer, PriceContainer, AddButton, BackgroundImage
} from './collection-item.styles'

import { addCartItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addCartItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage classname="image" imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addCartItem(item)}>ADD TO CART</AddButton>
        </CollectionItemContainer>

    )
};


const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);