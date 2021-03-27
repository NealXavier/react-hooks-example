import React, { createContext } from 'react';
import './App.css';

const BatteryContext = createContext()
const OnlineContext = createContext()

const Leaf = () => (<BatteryContext.Consumer>{battery=><OnlineContext.Consumer>{online=><h1>battery:{battery},online:{+online}</h1>}</OnlineContext.Consumer>}</BatteryContext.Consumer>)
const Middle = () => <Leaf />

class App extends React.Component {
  state = {
    battery : 60,
    online : true
  }
  render(){
    const {battery,online} = this.state
    return (
      <BatteryContext.Provider value={battery}>
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
      </BatteryContext.Provider>
    )
  }
}   


export default App;
