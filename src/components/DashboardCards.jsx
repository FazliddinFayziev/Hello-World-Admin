import React from 'react';
import { BiGridAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBarChartLine, BsFolderCheck } from "react-icons/bs";

const DashboardCards = ({ products, orders, lastWeekOrders }) => {
    const cards = [
        {
            id: 0,
            bg_color: "linear-gradient(135deg, #3498db, #1abc9c)",
            icon: (<BiGridAlt fontSize={30} />),
            text: products,
            title: "All Products",
            main_icon: (<BsBarChartLine color='#fff' fontSize={50} />)
        },
        {
            id: 1,
            bg_color: "linear-gradient(135deg, #e74c3c, #c0392b)",
            icon: (<IoMdNotificationsOutline fontSize={30} />),
            text: orders,
            title: "All Orders",
            main_icon: (<BsBarChartLine color='#fff' fontSize={50} />)
        },
        {
            id: 2,
            bg_color: "linear-gradient(135deg, #f39c12, #e67e22)",
            icon: (<BsFolderCheck fontSize={30} />),
            text: lastWeekOrders,
            title: "LastWeek Orders",
            main_icon: <BsBarChartLine color='#fff' fontSize={50} />
        },
    ];
    return (
        <div className='main__section__container'>
            {cards.map((card, index) => {
                return (
                    <div key={index} style={{ background: card.bg_color }} className='main_section_box'>
                        <div className='main_section_box_part_one'>
                            {/* ICON */}
                            <div className='main_section_box_icon item_column'>
                                {card.icon}
                            </div>
                            {/* TEXT */}
                            <div className='main_section_box_text item_column'>
                                <h3>{card.text}</h3>
                            </div>
                            {/* Title */}
                            <div className='main_section_box_title item_column'>
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

export default DashboardCards;
