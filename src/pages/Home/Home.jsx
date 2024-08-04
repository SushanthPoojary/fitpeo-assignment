import SideMenu from "../../components/SideMenu/SideMenu";
import "./home.scss";

function Homepage() {
    return (
        <div className="homepage">
            <SideMenu />
            <div className="dashMainContent"></div>
        </div>
    );
}

export default Homepage;