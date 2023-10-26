import React, { useEffect } from 'react';
import "../style/main.css";
import { DashboardCards, DashboardGraph, Loading, SmallFooter, SocialCards, WeekGraph } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboard } from '../container/dashboardSlice';

const Main = () => {
    const dispatch = useDispatch();
    const { loading, dashboard, error } = useSelector((state) => state.dashboard)

    useEffect(() => {
        dispatch(fetchDashboard())
        console.log(dashboard)
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <section className='main__section'>

            {/* DASHBOARD CARDS */}

            <div className='main__title__section'>
                <h1>#Hello World Dashboard</h1>
            </div>

            <DashboardCards
                orders={dashboard.allOrders}
                products={dashboard.allProducts}
                lastWeekOrders={dashboard.lastweekOrders}
            />

            <div className='both__graphs__info'>

                {/* GRAPH ONE */}
                <div className='graph_single'>
                    <div className='main__graph__title'>
                        <h1>Selled products (Week)</h1>
                    </div>
                    <WeekGraph weekOrders={dashboard.getWeeklyOrders} />
                </div>

                {/* GRAPH TWO */}
                <div className='graph_single'>
                    <div className='main__graph__title'>
                        <h1>Selled products (Month)</h1>
                    </div>
                    <DashboardGraph monthOrders={dashboard.getMonthlyOrders} />
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