import React from 'react';
import './dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faEnvelope, faGear, faBell, faHome, faChartSimple, faClipboardCheck, faWallet, faBagShopping, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend as RechartsLegend } from 'recharts';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {

    let pieChart = {
        labels: ['Goal Completed'],
        datasets: [
            {
                data: [70, 30],
                backgroundColor: ['orange', 'grey'],
            },
        ],
    };

    let barChartData = [
        { name: '5', orders: 4000 },
        { name: '9', orders: 3000 },
        { name: '11', orders: 2000 },
        { name: '13', orders: 2780},
        { name: '15', orders: 1890 },
        { name: '17', orders: 2390 },
        { name: '19', orders: 3490 },
        { name: '21', orders: 1490 },
        { name: '23', orders: 5478 },
        { name: '25', orders: 3469 },
        { name: '27', orders: 4789 }
    ];

    return (
        <div className='dashboard-container'>

            {/* Top nav bar */}
            <nav>
                <div className='Logo'>
                    <ul>
                        <li><FontAwesomeIcon icon={faBars} size='xl' /></li>

                        <div className="search-container">
                            <FontAwesomeIcon icon={faSearch} className='search-icon' />
                            <input type="text" className="search-input" placeholder="Search" />
                        </div>
                    </ul>
                </div>

                <div className='menu'>
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} size='lg' /></li>
                        <li><FontAwesomeIcon icon={faGear} size='lg' /></li>
                        <li><FontAwesomeIcon icon={faBell} size='lg' /></li>
                        <li><img src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' /></li>
                    </ul>
                </div>
            </nav>

            {/* Side nav bar and main dashboard */}
            <div className='row'>
                <div className='col-md-1 d-none d-sm-block sidebar' style={{ backgroundColor: '#4c4b4b', width: '65px' }}>
                    <div className='topSidebar'>
                        <div className='sidebar-sticky'>
                            <ul className='nav flex-column ps-3'>
                                <li className='nav-item'><FontAwesomeIcon icon={faHome} size='lg' color='orange' /></li>
                                <li className='nav-item'><FontAwesomeIcon icon={faChartSimple} size='lg' /></li>
                                <li className='nav-item'><FontAwesomeIcon icon={faClipboardCheck} size='lg' /></li>
                                <li className='nav-item'><FontAwesomeIcon icon={faWallet} size='lg' /></li>
                                <li className='nav-item'><FontAwesomeIcon icon={faBagShopping} size='lg' /></li>
                            </ul>
                        </div>
                    </div>

                    <div className='bottomSidebar'>
                        <ul className='nav flex-column ps-3'>
                            <li className='nav-item'><FontAwesomeIcon icon={faArrowRightFromBracket} size='lg' /></li>
                        </ul>
                    </div>
                </div>

                <div className='col-md-11'>
                    <div className='row'>

                        <div className='col-md-3 bg-dark pt-3'>
                            <div className='card'>
                                <img className='card-img-top' src='https://img.icons8.com/?size=100&id=106880&format=png&color=000000' alt='' id='totalCard'></img>
                                <p className='card-text'>Total Orders</p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h4><b>75</b></h4>
                                    </div>

                                    <div className='col-md-6'>
                                        <p><img src='https://img.icons8.com/?size=100&id=39778&format=png&color=000000' alt='' style={{ height: '20px', width: '20px' }} /> 3%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 bg-dark pt-3'>
                            <div className='card'>
                                <img className='card-img-top' src='https://img.icons8.com/?size=100&id=106881&format=png&color=000000' alt='' id='totalCard'></img>
                                <p className='card-text'>Total Delivered</p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h4><b>70</b></h4>
                                    </div>

                                    <div className='col-md-6'>
                                        <p><img src='https://img.icons8.com/?size=100&id=43830&format=png&color=000000' alt='' style={{ height: '20px', width: '20px' }} /> 3%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 bg-dark pt-3'>
                            <div className='card'>
                                <img className='card-img-top' src='https://img.icons8.com/?size=100&id=BjKX9A3qsEMa&format=png&color=000000' alt='' id='totalCard'></img>
                                <p className='card-text'>Total Cancelled</p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h4><b>05</b></h4>
                                    </div>

                                    <div className='col-md-6'>
                                        <p><img src='https://img.icons8.com/?size=100&id=39778&format=png&color=000000' alt='' style={{ height: '20px', width: '20px' }} /> 3%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3 bg-dark pt-3'>
                            <div className='card'>
                                <img className='card-img-top' src='https://img.icons8.com/?size=100&id=o0HwIWdDOSeq&format=png&color=000000' alt='' id='totalCard'></img>
                                <p className='card-text'>Total Revenue</p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h4><b>$12K</b></h4>
                                    </div>

                                    <div className='col-md-6'>
                                        <p><img src='https://img.icons8.com/?size=100&id=43830&format=png&color=000000' alt='' style={{ height: '20px', width: '20px' }} /> 3%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-8 bg-dark' style={{ paddingTop: '20px' }}>
                            <div className='card'>
                                <h5 className='text-dark'>Activity</h5>
                                <BarChart width={850} height={235} data={barChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis label={{ value: 'Orders', angle: -90, position: 'insideLeft' }} />
                                    <RechartsTooltip />
                                    <RechartsLegend />
                                    <Bar dataKey="orders" fill="orange" />
                                    
                                </BarChart>
                            </div>
                        </div>

                        <div className='col-md-4 bg-dark' style={{ paddingTop: '20px' }}>
                            <div className='card'>
                                <h5 className='text-light'>Net Profit</h5>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <h5><b>$6759.25</b></h5>
                                    </div>

                                    <div className='col-md-8'>
                                        <Pie data={pieChart} />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h5>Sales</h5>
                                    </div>

                                    <div className='col-md-6'>
                                        <p>81% <img src='https://img.icons8.com/?size=100&id=43830&format=png&color=000000' alt='' style={{ height: '20px', width: '20px' }} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Table and Customer Review */}
                    <div className='row'>
                        <div className='col-md-7 bg-dark p-2 text-light'>
                            <h3>Recent Orders</h3>
                            <div className='table-responsive'>
                                <table className='table table-striped-columns table-dark'>
                                    <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Order No.</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Wade Warren</td>
                                            <td>15478296</td>
                                            <td>$124.00</td>
                                            <td><button className='btn btn-success btn-sm'>Delivered</button></td>
                                        </tr>
                                        <tr>
                                            <td>Jane Cooper</td>
                                            <td>48961578</td>
                                            <td>$365.02</td>
                                            <td><button className='btn btn-success btn-sm'>Delivered</button></td>
                                        </tr>
                                        <tr>
                                            <td>Guy Hawkins</td>
                                            <td>87456123</td>
                                            <td>$45.88</td>
                                            <td><button className='btn btn-danger btn-sm'>Cancelled</button></td>
                                        </tr>
                                        <tr>
                                            <td>Kristin Watson</td>
                                            <td>78945612</td>
                                            <td>$65.00</td>
                                            <td><button className='btn btn-warning btn-sm'>Pending</button></td>
                                        </tr>
                                        <tr>
                                            <td>Cody Fisher</td>
                                            <td>93456123</td>
                                            <td>$545.00</td>
                                            <td><button className='btn btn-success btn-sm'>Delivered</button></td>
                                        </tr>
                                        <tr>
                                            <td>Savannah Nguyen</td>
                                            <td>54678932</td>
                                            <td>$128.20</td>
                                            <td><button className='btn btn-success btn-sm'>Delivered</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='col-md-5 bg-dark p-2 text-light'>
                            <h3>Customer Reviews</h3>
                            <div className='customer-reviews'>
                                <div className='review'>
                                    <img src='https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Customer' className='customer-photo' /><h5>Jenny Wilson</h5>
                                    <div className='review-content'>
                                        <div className='review-stars'>
                                            <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>
                                        </div>
                                        <p>The food was excellent and so was the service.</p>
                                    </div>
                                </div>
                                <div className='review'>
                                    <img src='https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Customer' className='customer-photo' />
                                    <div className='review-content'>
                                        <div className='review-stars'>
                                            <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>
                                        </div>
                                        <p>We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service</p>
                                    </div>
                                </div>
                                <div className='review'>
                                    <img src='https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Customer' className='customer-photo' />
                                    <div className='review-content'>
                                        <div className='review-stars'>
                                            <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                                        </div>
                                        <p>Excellent quality and fast shipping!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
