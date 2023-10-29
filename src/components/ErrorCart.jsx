import React from 'react';
import '../style/cart.css';

const ErrorCart = ({ setErrorCart }) => {
    return (
        <div className='main_bg_card'>
            <div className='main__delete__warning__card'>
                <div>
                    <h4>There is an error, please try again!</h4>
                    <div className='delete__warning__buttons'>
                        <button onClick={() => setErrorCart(false)} className='dwb_1'>Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorCart