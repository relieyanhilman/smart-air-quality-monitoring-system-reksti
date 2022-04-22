import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

// export default function LineChart({chartData}) {
//   return (
//     <Line data={chartData} />
//   )
// }

class LineChart extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                <Line data={this.props.chartData} />
                <input type="submit" value="get data" onClick={() => this.props.onSubmit()} />
            </div>
        )
    }
}

export default LineChart