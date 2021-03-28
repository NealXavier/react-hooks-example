import React,{useEffect, useState} from 'react';


const App = (props) => {
  const [size,setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  const [count,setCount] = useState(0)

  const resizeScreen = () =>{
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    })
  } 

  // useEffect: runs once when initial to addEventListerner & removeEventListerner
  useEffect(()=>{
    window.addEventListener('resize',resizeScreen,false)
    return ()=>{window.removeEventListener('resize',resizeScreen,false)}
  },[])

  // useEffect: runs when count changed
  useEffect(()=>{
    document.title = count
  },[count])

  return (
      <>
        <button type='button' onClick={()=>setCount(count+1)}>click</button><br/>
        Click:{ count } <br/>
        size:{size.width} * {size.height}
      </>
  )
}

export default App;
