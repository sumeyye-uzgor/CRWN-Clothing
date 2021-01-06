import React from 'react'
import { connect } from 'react-redux'

import './collection-item.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import { addCartItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addCartItem }) => {
    const { imageUrl, name, price } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}>ADD TO CART</CustomButton>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);