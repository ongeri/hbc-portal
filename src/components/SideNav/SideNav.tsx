import * as React from 'react';
import "./SideNav.css"
import {Link} from "react-router-dom";

class SideNav extends React.Component {
    render() {
        return (

            <nav id="sidebar">
                <div className="sidebar-header">
                    <img className="thumbnail mx-auto " src={"/images/county_logo.png"}/>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <Link to="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                              className="dropdown-toggle">Home</Link>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <Link to="#">Home 1</Link>
                            </li>
                            <li>
                                <Link to="#">Home 2</Link>
                            </li>
                            <li>
                                <Link to="#">Home 3</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">About</Link>
                        <Link to="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                              className="dropdown-toggle">Pages</Link>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <Link to="#">Page 1</Link>
                            </li>
                            <li>
                                <Link to="#">Page 2</Link>
                            </li>
                            <li>
                                <Link to="#">Page 3</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default SideNav;
