import React from 'react';
import "../style/main.css";
import { DashboardCards, DashboardGraph, SmallFooter, SocialCards, WeekGraph } from '../components';

const Main = () => {
    return (
        <section className='main__section'>

            {/* DASHBOARD CARDS */}

            <div className='main__title__section'>
                <h1>#Hello World Dashboard</h1>
            </div>

            <DashboardCards />

            <div className='both__graphs__info'>

                {/* GRAPH ONE */}
                <div className='graph_single'>
                    <div className='main__graph__title'>
                        <h1>Selled products (Week)</h1>
                    </div>
                    <WeekGraph />
                </div>

                {/* GRAPH TWO */}
                <div className='graph_single'>
                    <div className='main__graph__title'>
                        <h1>Selled products (Month)</h1>
                    </div>
                    <DashboardGraph />
                </div>

            </div>

            {/* SOCIAL CARDS */}

            <div className='main__graph__title'>
                <h1>Social Media</h1>
            </div>
            <SocialCards />

            {/* Footer */}
            <SmallFooter />

        </section>
    )
}

export default Main