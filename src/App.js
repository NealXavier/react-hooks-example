import React,{createContext, useContext, useState} from 'react';

const CounterContext = createContext()

const Counter = () => {
  const count = useContext(CounterContext)
  return (
    <h1>{count}</h1>
  )
}

// remove consumer instead of `useContext`
const App = (props) => {
  const count = useState(1)
  return (
      <>
        <CounterContext.Provider value={count}>
            <Counter />
        </CounterContext.Provider>
      </>
  )
}

export default App;
