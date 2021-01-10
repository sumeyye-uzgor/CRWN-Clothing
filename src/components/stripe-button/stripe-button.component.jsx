import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51I7qFWI01V9t3da73PV5MYoZDqPSkL3pBNnXoiKgbrWVlwmFvndmFp5fEPO9os9Hjc4hxydH72x5IU7QLpGnX3rE00RxQmG1OW';
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )

}

export default StripeCheckoutButton;