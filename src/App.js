//import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component
{
  state = {counter:0}
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }
  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
  }

  incrementCounter = () => 
  {
    this.setState({counter:this.state.counter+1})
  }

  // Overridden render function
  render()
  {
    console.log("Inside the render method")
    console.log(this.props)
    return (
        <div>
          <button onClick={this.incrementCounter}>Click me</button>
          <br/>
          Counter:{this.state.counter}
        </div>
    )
  }

  componentDidMount()
  {
    console.log("I am inside componentDidMount")
  }
}

// function App(props) 
// {
//   console.log(props.color)
//   console.log(props.size)
//   console.log(props.clickEvent)
//   return (
//     <div className="App">
//       <button onClick={props.clickEvent}>Click me</button>
//     </div>
//   );
// }

export default App;