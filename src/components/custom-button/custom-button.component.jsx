import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSingIn, inverted, ...otherProops }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`} {...otherProops}>
        {children}
    </button>
);

export default CustomButton;