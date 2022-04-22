import React, {useState, Component}  from 'react';
import "./App.css";

import LineChart from "./components/LineChart";

import {UserData} from './Data'


class App extends Component {
  constructor(){
    super();
    this.state={
      labels: UserData.map((data) => data.year),
      datasets: [
            {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: ["rgba(75,192,192,1)",
          ],
          borderColor: "black",
          borderWidth: 2
          },
        ],
        };
    }
    
    getTemperature = () =>{
      fetch('http://airquality-g3.herokuapp.com/condition')
      .then(response => response.json())
      .then(result => {
        console.log('pertama', this.state)
        this.setState(Object.assign(this.state.datasets[0], {data : result.map((data) => data.temperature)}));
        // this.setState(Object.assign(this.state, {label : 'temperature')}))
        console.log(this.state);
      })
      // .then(result => console.log(result[0].temperature))
    }
  

  // const [userData1, setUserData1] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //     label: "Users Gained",
  //     data: UserData.map((data) => data.userGain),
  //     backgroundColor: ["rgba(75,192,192,1)",
  //   ],
  //   borderColor: "black",
  //   borderWidth: 2
  //   },
  // ],
  // });

  // getTemperature = () => {

  // }
  render() {
  return (
    <div className="App">
      <div className="flex-container">
      <div style={{width: 500}}>
      <LineChart chartData={this.state} onSubmit={this.getTemperature} />
      </div>

      <div style={{width: 500}}>
      <LineChart chartData={this.state} />
      </div>

      <div style={{width: 500}}>
      <LineChart chartData={this.state} />
      </div>

      <div style={{width: 500}}>
      <LineChart chartData={this.state} />
      </div>

      <div style={{width: 500}}>
      <LineChart chartData={this.state} />
      </div>

      </div>
    </div>
  )};
  }

export default App;
