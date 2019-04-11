import * as React from 'react';
import "./DashBoard.css"
import SideNav from "../SideNav/SideNav";
import Header from "../Header/Header";
import TransactionsChart from "./TransactionsChart/TransactionsChart";

class DashBoard extends React.Component {
    render() {
        return (
            <div className="row ">
                <div className="col-sm-3  open-sidenav">
                    <SideNav/>
                </div>
                <div className="col-sm-9 dashboard-main">
                    <Header requestLogout={() => {
                    }}/>
                    <div className="row">
                        <div className="col-md">
                            <TransactionsChart/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashBoard;
