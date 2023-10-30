import React from 'react'

const ChangeAdminCart = ({ setShowCart, userId, mainFunction }) => {
    return (
        <div className='main_bg_card'>
            <div className='main__delete__warning__card'>
                <div>
                    <h4>Are you sure ?</h4>
                    <div className='delete__warning__buttons'>
                        <button onClick={() => setShowCart(false)} className='dwb_1'>Cancel</button>
                        <button onClick={() => mainFunction(userId)} style={{ backgroundColor: 'yellowgreen', color: '#000' }} className='dwb_2'>Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeAdminCart