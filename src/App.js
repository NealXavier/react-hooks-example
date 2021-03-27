import React, { createContext } from 'react';
import './App.css';

const BatteryContext = createContext()

const Leaf = () => (<BatteryContext.Consumer>{battery=><h1>battery:{battery}</h1>}</BatteryContext.Consumer>)
const Middle = () => <Leaf />

class App extends React.Component {
  state = {
    battery : 60
  }
  render(){
    const {battery} = this.state
    return (
      <BatteryContext.Provider value={battery}>
        <button 
          type="button"
          onClick={()=>this.setState({battery:battery-1})}>
            countDown
        </button>
        <Middle />
      </BatteryContext.Provider>
    )
  }
}   


export default App;
