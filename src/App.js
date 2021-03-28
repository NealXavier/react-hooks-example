import React, { useState } from 'react';

// let id = 1
const App = (props) => {
  // let name,setName;
  // let count,setCount;

  // id+=1
  // React Hook "useState" is called conditionally. React Hooks must be called 
  // in the exact same order in every component render  react-hooks/rules-of-hooks
  // odd times
  // if(id & 1){
  //   [count,setCount] = useState(0);
  //   [name,setName] = useState(`mike`)
  // }else{
  //   [name,setName] = useState('mike')
  //   [count,setCount] = useState(0)
  // }


  // when `defaultCount` runs much time, and runs when render every time, now provide a function in `useState`
  // will runs once when initial first time.
  // const defaultCount = props.defaultCount || 0
  const [count,setCount] = useState(()=>{
    console.log('defaultCount:')
    return props.defaultCount || 0
  })

  return (
      <> 
        count: {count} <br/>
        <button type="button" onClick={()=>{setCount(count+1)}}>onPress</button>
      </>
  )
}

export default App;
