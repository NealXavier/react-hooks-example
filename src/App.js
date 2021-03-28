import React, { useState } from 'react';

// let id = 1
const App = () => {
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
  const [count,setCount] = useState(0)

  return (
      <> 
        count: {count} <br/>
        <button type="button" onClick={()=>{setCount(count+1)}}>onPress</button>
      </>
  )
}

export default App;
