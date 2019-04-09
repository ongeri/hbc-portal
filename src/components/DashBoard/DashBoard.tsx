import * as React from 'react';
import "./DashBoard.css"
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";

class DashBoard extends React.Component {
    render() {
        return (
            <div className={"row"}>
                <SideNav/>
                <div className={"col-md"}>
                    <Header requestLogout={() => {
                    }}/>
                    <div className={"row"} style={{backgroundColor: "cornsilk",}}>
                        <p>
                            Dashboard content
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
