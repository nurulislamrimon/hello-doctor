import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="left-sidebar" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-5">
                    {/* <!-- Page content here --> */}
                    <h1 className='text-5xl text-secondary'>Dashboard</h1>
                    <Outlet />
                </div>
                <div class="drawer-side shadow-xl">
                    <label for="left-sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='test'>Testing</Link></li>
                        <li><Link to='sectest'>Second Testing</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;