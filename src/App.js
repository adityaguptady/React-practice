//import logo from './logo.svg';
import './App.css';
import React from 'react';

class InnerComponent extends React.Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return <div>This is inner component</div>
  }

  componentWillUnmount()
  {
    console.log("Inside componentWillUnmount")
  }

}

class App extends React.Component
{
  state = {
    counter:0,
    innerComponent: <InnerComponent/>
  }
  constructor(props)
  {
    super(props)
    console.log("I am inside Constructor")
  }

  static getDerivedStateFromProps()
  {
    console.log("I am inside getDerivedStateFromProps")
    return true
  }

  shouldComponentUpdate()
  {
    console.log("Inside shouldComponentUpdate")
    return true
  }

  incrementCounter = () => 
  {
    //updating state on function call
    this.setState({counter:this.state.counter+1})

    this.setState({innerComponent: <div>Component is unmounted</div>})

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
          <br/>
          {this.state.innerComponent}
        </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log("Inside getSnapshotBeforeUpdate")
    console.log("Previous Prop:")
    console.log(prevProps)
    console.log("Previous State:")
    console.log(prevState)
    console.log("--------------------")
    console.log("Updated Prop:")
    console.log(this.props)
    console.log("Update State:")
    console.log(this.state)
    return true
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