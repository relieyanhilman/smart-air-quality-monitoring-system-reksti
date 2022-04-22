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
      fetch('http://airquality-g3.herokuapp.com/condition', {
        mode: 'no-cors'
      })
      .then(response => console.log(response.json()))
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
