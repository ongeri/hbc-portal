import * as React from 'react';
import "./DashBoard.css"
import SideNav from "../SideNav/SideNav";
import TransactionsChart from "./TransactionsChart/TransactionsChart";
import Header from "../Header/Header";

class DashBoard extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <SideNav/>
                <div id="content">
                    <Header requestLogout={() => {
                    }}/>
                    <TransactionsChart/>
                </div>
            </div>
        );
    }
}

export default DashBoard;
