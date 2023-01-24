import "./Sidebar.css";
import logo from "../../../assets/auth/AttendIn-logo-square.png";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const pathname = useLocation().pathname;
    return (
        <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                </div>
                {/* <i
                    onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i> */}
            </div>

            <div className="sidebar__menu">
                <div className={`sidebar__link ${pathname === "/" ? "active_menu_link" : ""
                    }`}>
                    <i className="fa fa-user"></i>
                    <Link to={"/"}>Students</Link>
                </div>
                <div className={`sidebar__link ${pathname === "/teachers" ? "active_menu_link" : ""
                    }`}>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <Link to={"/teachers"}>Teachers</Link>
                </div>
                <div className={`sidebar__link ${pathname === "/rooms" ? "active_menu_link" : ""
                    }`}>
                    <i className="fa fa-window-maximize" aria-hidden="true"></i>
                    <Link to={"/rooms"}>Rooms</Link>
                </div>
                <div className={`sidebar__link ${pathname === "/roomreservation" ? "active_menu_link" : ""
                    }`}>
                    <i className="fa fa-window-restore" aria-hidden="true"></i>
                    <Link to={"/roomreservation"}>Room Reservation</Link>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h2 className="line"> </h2>
                <div className="sidebar__link">
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <a href="#e">Settings</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#e">Leave Policy</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#e">Special Days</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#e">Apply for leave</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#e">Log out</a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;