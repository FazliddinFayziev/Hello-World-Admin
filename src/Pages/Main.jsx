import React, { useEffect } from 'react';
import "../style/main.css";
import { DashboardCards, DashboardGraph, Error, Loading, SmallFooter, SocialCards, WeekGraph } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboard } from '../container/dashboardSlice';
import { useGlobalContext } from '../context/context';

const Main = () => {
    const dispatch = useDispatch();
    const { loading, dashboard, error } = useSelector((state) => state.dashboard)
    const { dashboardItems, setDashboardItems } = useGlobalContext();
    const { orders, products, lastweekOrders, weekOrders, monthOrders } = dashboardItems

    useEffect(() => {
        if (!orders && !products && !lastweekOrders && !weekOrders.length && !monthOrders.length) {
            dispatch(fetchDashboard());
        }
    }, []);

    useEffect(() => {
        if (dashboard) {
            setDashboardItems({
                orders: dashboard.allOrders,
                products: dashboard.allProducts,
                lastweekOrders: dashboard.lastweekOrders,
                weekOrders: dashboard.getWeeklyOrders,
                monthOrders: dashboard.getMonthlyOrders,
            })
        }
    }, [dashboard])

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <section className='main__section'>

            {/* DASHBOARD CARDS */}

            <div className='main__title__section'>
                <h1>#Hello World Dashboard</h1>
            </div>

            <DashboardCards
                orders={orders}
                products={products}
                lastWeekOrders={lastweekOrders}
            />

            <div className='both__graphs__info'>

                {/* GRAPH ONE */}
                <div className='graph_single'>
                    <div className='main__graph__title'>
                        <h1>Selled products (Week)</h1>
                    </div>
                    <WeekGraph weekOrders={weekOrders} />
                </div>

                {/* GRAPH TWO */}
                <div className='graph_single'>
                    <div className='main__graph__title'>
                        <h1>Selled products (Month)</h1>
                    </div>
                    <DashboardGraph monthOrders={monthOrders} />
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