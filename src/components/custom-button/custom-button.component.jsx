import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, isGoogleSingIn, ...otherProops }) => (
    <button className={`${isGoogleSingIn ? 'google-sign-in' : ''} custom-button`} {...otherProops}>
        {children}
    </button>
);

export default CustomButton;