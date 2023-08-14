import React from 'react';
import { AiOutlineUser, AiOutlineInstagram } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBarChartLine, BsFolderCheck } from "react-icons/bs";

const cards = [
    {
        id: 0,
        bg_color: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
        icon: (<AiOutlineUser fontSize={30} />),
        text: 600,
        title: "Instagram",
        main_icon: (<AiOutlineInstagram color='#fff' fontSize={50} />)
    },
    {
        id: 1,
        bg_color: "linear-gradient(135deg, #0088CC, #2CA5E0)",
        icon: (<AiOutlineUser fontSize={30} />),
        text: 800,
        title: "Telegram",
        main_icon: (<LiaTelegram color='#fff' fontSize={50} />)
    },
]

const SocialCards = () => {
    return (
        <div className='main__section__container'>

            {cards.map((card, index) => {
                return (
                    <div key={index} style={{ backgroundImage: card.bg_color }} className='main_section_box'>
                        <div className='main_section_box_part_one'>
                            {/* ICON */}
                            <div style={{ color: '#fff' }} className='main_section_box_icon item_column'>
                                {card.icon}
                            </div>

                            {/* TEXT */}
                            <div style={{ color: '#fff' }} className='main_section_box_text item_column'>
                                <h3>{card.text}</h3>
                            </div>

                            {/* Title */}
                            <div style={{ color: '#fff' }} className='main_section_box_title item_column'>
                                <p>{card.title}</p>
                            </div>
                        </div>
                        <div className='main_section_box_part_two'>
                            {card.main_icon}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default SocialCards;