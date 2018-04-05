import React from 'react'
import './WagerCard.css'
import InjectedCheckoutForm from './../CheckoutForm/CheckoutForm';


function WagerCard(props) {
    return (
        <div>
            <div>
                <InjectedCheckoutForm challenge={props.challenge} />
            </div>
        </div>
    )
}

export default WagerCard