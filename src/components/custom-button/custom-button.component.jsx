import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({ children, ...otherProops }) => (
    <button className="custom-button" {...otherProops}>
        {children}
    </button>
);

export default CustomButton;