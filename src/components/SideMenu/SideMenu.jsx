import "./sideMenu.scss";

function SideMenu() {
    return (
        <div className="sideMenu">
            <div className="menuIcons">
                <div className="menuIcon active">
                    <img src="/home.png" alt="" />
                </div>
                <div className="menuIcon">
                    <img src="/bar-chart.png" alt="" />
                </div>
                <div className="menuIcon">
                    <img src="/clipboard.png" alt="" />
                </div>
                <div className="menuIcon">
                    <img src="/wallet-with-bill.png" alt="" />
                </div>
                <div className="menuIcon">
                    <img src="/bag.png" alt="" />
                </div>
            </div>
            <div className="powerIcon">
                <img src="/out.png" alt="" />
            </div>
        </div>
    );
}

export default SideMenu;