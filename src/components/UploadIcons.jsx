import React from 'react'
import { useGlobalContext } from '../context/context';
const UploadIcons = ({ icons }) => {
    const { addQrcode, setAddQrcode } = useGlobalContext();
    return (
        <div className="icon-container">
            {icons.map((n, i) => {
                const { name, icon, value } = n
                return (
                    <div key={i} className='icons__container__box'>
                        <a className='qr__code__icons' href='#' target="_blank" rel="noopener noreferrer">
                            {icon}
                        </a>
                        <input
                            name={name}
                            value={value}
                            onChange={(e) => {
                                const updatedIcons = addQrcode.icons.map((iconItem) => {
                                    if (iconItem.name === name) {
                                        return { ...iconItem, value: e.target.value };
                                    }
                                    return iconItem;
                                });

                                setAddQrcode({
                                    ...addQrcode,
                                    icons: updatedIcons,
                                });
                            }}
                            type="text"
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default UploadIcons