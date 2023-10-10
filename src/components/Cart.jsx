import React from 'react';
import '../style/cart.css';

const Cart = ({ setShowCart, deleteId, deleteFunction }) => {
    return (
        <div className='main_bg_card'>
            <div className='main__delete__warning__card'>
                <div>
                    <h4>Are sure that you want to delete this ?</h4>
                    <div className='delete__warning__buttons'>
                        <button onClick={() => setShowCart(false)} className='dwb_1'>Cancel</button>
                        <button onClick={() => deleteFunction(deleteId)} className='dwb_2'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart