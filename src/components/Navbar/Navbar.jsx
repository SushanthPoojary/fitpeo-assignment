import "./navbar.scss";

function Navbar() {
    return (
        <nav>
            <div className="left-cont">
                <img src="/logo.png" alt="" />
                <div className="searchBar">
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="right-cont">
                <div className="icons">
                    <img src="/email.png" alt="" />
                    <img src="/setting.png" alt="" />
                    <img src="/notification.png" alt="" />
                </div>
                <div className="profile">
                    <img src="/man.png" alt="" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar