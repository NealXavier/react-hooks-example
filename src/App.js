import React, { Component,lazy,Suspense } from 'react';
import './App.css';

const About = lazy(()=>import(/*webpackChunkName: "about" */'./About'))


//  when i block 'chunk.about.js' or  it fetch causes error have to create ErrorBoundary (refer to image2.png)
//  method 1: componentDidCatch
//  method 2: getDerivedStateFromError

class App extends Component {
  state = {
    hasError:false
  }
  // componentDidCatch(){this.setState({error:true})}
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render(){
    const {hasError} = this.state
    // suspend works while component rendering
    if(hasError){
      return (<div>hasError</div>)
    }
    return (
      <> 
      <Suspense fallback={<div>loading</div>}>
        <About></About>
      </Suspense>
      </>
    )
  }
} 


export default App;
