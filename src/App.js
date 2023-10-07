import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  // Overridden render function
  render()
  {
    console.log(this.props)
    return <button onClick={this.props.clickEvent}>Click me</button>
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
