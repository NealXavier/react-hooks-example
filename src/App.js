import React, { Component, createContext } from 'react';
import './App.css';

const BatteryContext = createContext(90) // setDefaultvalue
const OnlineContext = createContext(true)

class Leaf extends Component{
  // remove consumer
  static contextType = BatteryContext
  render(){
    const battery = this.context
    return (<h1>battery:{battery}</h1>)
  }
}

const Middle = () => <Leaf />

class App extends React.Component {
  state = {
    battery : 60,
    online : true
  }
  render(){
    const {battery,online} = this.state
    return (
      // <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button 
            type="button"
            onClick={()=>this.setState({battery:battery-1})}>
              countDown
          </button>
          <button 
            type="button"
            onClick={()=>this.setState({online:!online})}>
              switch
          </button>
          <Middle />
        </OnlineContext.Provider>
      // </BatteryContext.Provider>
    )
  }
}   


export default App;
