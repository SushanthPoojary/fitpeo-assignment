import Cards from "../../components/Cards/Cards";
import SideMenu from "../../components/SideMenu/SideMenu";
import "./home.scss";
import { cardData } from "../../lib/dummyData.js";
import ProgressBar from "../../components/ProgressBar/ProgressBar.jsx";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js"
import ChartComp from "../../components/Chart/ChartComp.jsx";

function Homepage() {

    Chart.register(CategoryScale);

    const options = {

        labels: [5, 9, 11, 13, 15, 17, 19],
        datasets: [
            {
                label: 'Revenue',
                data: [5, 10, 15, 20, 25, 30, 35],
                backgroundColor: "#7C00FE",
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className="homepage">
            <SideMenu />
            <div className="dashMainContent">
                <h1>Dashboard</h1>
                <div className="dashMainContainer">
                    <div className="leftCont">
                        <div className="cardCont">
                            {
                                cardData.map((item, index) => (
                                    <Cards key={index} item={item} />
                                ))
                            }
                        </div>
                        <div className="graphCont">
                            <ChartComp chartData={options} />
                        </div>
                        <div className="ordersCont">
                            <h3>Recent Orders</h3>
                            <div className="items">
                                <div className="item item-heading">
                                    <span>Customer</span>
                                    <span>Order No.</span>
                                    <span>Amount</span>
                                    <span>Status</span>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Wade Warren
                                    </span>
                                    <span>15478256</span>
                                    <span>$124.00</span>
                                    <span className="delivered">Delivered</span>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Jane Cooper
                                    </span>
                                    <span>48965786</span>
                                    <span>$365.02</span>
                                    <span className="delivered">Delivered</span>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Guy Hawkins
                                    </span>
                                    <span>78958215</span>
                                    <span>$44.88</span>
                                    <span className="cancelled">cancelled</span>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Wade Warren
                                    </span>
                                    <span>15478256</span>
                                    <span>$124.00</span>
                                    <span className="delivered">Delivered</span>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Jane Cooper
                                    </span>
                                    <span>48965786</span>
                                    <span>$365.02</span>
                                    <span className="delivered">Delivered</span>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Guy Hawkins
                                    </span>
                                    <span>78958215</span>
                                    <span>$44.88</span>
                                    <span className="cancelled">cancelled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightCont">
                        <div className="netProfitCount">
                            <div className="left">
                                <span>Net Profit</span>
                                <h3>$ 6759.25</h3>
                                <div className="profitCount">
                                    <img src="/arrow-up.png" alt="" />
                                    <span>3 %</span>
                                </div>
                            </div>
                            <div className="right">
                                <ProgressBar item={75} />
                                <span>*The values here are been rounded off.</span>
                            </div>
                        </div>
                        <div className="goalsCont">
                            <div className="items">
                                <div className="item">
                                    <img className="goalIcon" src="/target.png" alt="" />
                                    <span>Goals</span>
                                </div>
                                <img className="nextIcon" src="/next.png" alt="" />
                            </div>
                            <div className="items">
                                <div className="item">
                                    <img className="burgerIcon" src="/burger.png" alt="" />
                                    <span>Popular Dishes</span>
                                </div>
                                <img className="nextIcon" src="/next.png" alt="" />
                            </div>
                            <div className="items">
                                <div className="item">
                                    <img className="foodIcon" src="/food.png" alt="" />
                                    <span>Menus</span>
                                </div>
                                <img className="nextIcon" src="/next.png" alt="" />
                            </div>
                        </div>
                        <div className="feedbackCont">
                            <h3>Customer's Feedback</h3>
                            <div className="items">
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Jenny Wilson
                                    </span>
                                    <div className="starCont">
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Dianne Russell
                                    </span>
                                    <div className="starCont">
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Devon Lane
                                    </span>
                                    <div className="starCont">
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Jenny Wilson
                                    </span>
                                    <div className="starCont">
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Dianne Russell
                                    </span>
                                    <div className="starCont">
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="item">
                                    <span className="item-img-name">
                                        <img src="/man.png" alt="" />
                                        Devon Lane
                                    </span>
                                    <div className="starCont">
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/yellow-star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;