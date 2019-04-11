import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import './TransactionsChart.css'
import ReactEcharts from "echarts-for-react";
import EChartOption = echarts.EChartOption;

interface MatchParams {
    name: string;
}

// Props from parent element
export interface OwnProps {
}


// Props from store store state
interface StateProps {
}

// Interface to collect actions that can be done to store store by this component
interface DispatchProps {
}

type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps<MatchParams>


// Internal state of component
interface InternalState {
    eChartOption: EChartOption<EChartOption.SeriesLine>
}

type State = InternalState & StateProps;

class RevenueChart extends React.Component<Props, State> {
    constructor(props: Props, context: any) {
        super(props, context);
        const revenueLineSeries: EChartOption.SeriesLine = {
            animation: false,
            areaStyle: {
                color: "#a6d0f5"
            },
            lineStyle: {
                color: "#0063bb"
            },
            name: 'Count',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        };
        this.state = {
            eChartOption: {
                title: {
                    text: 'Revenue'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: [{
                    data: ['Count', 'Value', 'Errors'],
                }],
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['January', 'February ', 'March', 'April', 'May', 'June', 'July']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    revenueLineSeries
                ]
            }
        };
    }

    componentDidMount(): void {
        // Fetch all transactions that need to be shown on chart
    }

    render() {
        return <div>
            <label>Revenue </label>
            <div className="dashboard-widget-container" style={{backgroundColor: "white", borderRadius: 5}}>
                <ReactEcharts
                    option={this.state.eChartOption}
                    style={{height: '350px', width: '100%'}}/>
            </div>
        </div>;
    }

}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: OwnProps): DispatchProps {
    return {};
}

export default withRouter(connect<StateProps, (dispatch: Dispatch<any>, ownProps: OwnProps) => DispatchProps, OwnProps>(null, mapDispatchToProps)(RevenueChart));
