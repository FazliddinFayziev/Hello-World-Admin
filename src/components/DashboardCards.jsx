import React from 'react';
import { BiGridAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBarChartLine, BsFolderCheck } from "react-icons/bs";

const cards = [
    {
        id: 0,
        bg_color: "rgb(209, 255, 215)",
        icon: (<BiGridAlt fontSize={30} />),
        text: 100,
        title: "All Products",
        main_icon: (<BsBarChartLine color='green' fontSize={50} />)
    },
    {
        id: 1,
        bg_color: "rgb(255, 209, 209)",
        icon: (<IoMdNotificationsOutline fontSize={30} />),
        text: 48,
        title: "New Orders",
        main_icon: (<BsBarChartLine color='red' fontSize={50} />)
    },
    {
        id: 2,
        bg_color: "rgb(252, 255, 209)",
        icon: (<BsFolderCheck fontSize={30} />),
        text: 80,
        title: "Last Week Orders",
        main_icon: <BsBarChartLine color='orange' fontSize={50} />
    },
]

const DashboardCards = () => {
    return (
        <div className='main__section__container'>

            {cards.map((card, index) => {
                return (
                    <div key={index} style={{ backgroundColor: card.bg_color }} className='main_section_box'>
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

export default DashboardCards