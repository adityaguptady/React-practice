import './App.css';
import React from 'react';

// feature branch code

//Child Component
class InnerComponent extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  sendData=()=>
  {
    const text = document.getElementById("textMessage").value
    console.log("Data to send to parent is: "+text)
    this.props.parentCallBack(text)
  }

  render()
  {
    return (
      <div>
        <input type='Text' placeholder='Enter message for parent' id="textMessage"/>
        <button onClick={()=>this.sendData()}>Send to parent</button>
      </div>
    )
  }
}

//parent component
class App extends React.Component
{
  state = {message:"This is from Parent"}

  parentCallbackFunction = (text) =>
  {
    console.log("Data in parent: "+text)
    this.setState({message: text})
  }

  render()
  {
    return (
    <div>
      <InnerComponent parentCallBack={this.parentCallbackFunction}/>
      <div>Data From Child:{this.state.message}</div>
    </div>
    )
  }
}

//child component
// class InnerComponent extends React.Component
// {
//   constructor(props)
//   {
//     super(props)
//   }

//   render()
//   {
//     const style = {color:this.props.color}
//     return <div>
//       Child says:
//       <span style={style}>{this.props.name}</span>
//     </div>
//   }

//   componentWillUnmount()
//   {
//     console.log("Inside componentWillUnmount")
//   }
// }

//parent component
// class App extends React.Component
// { 
//   state = {childColor:"black", name:"John"}

//   changeColor = () =>
//   {
//     const colorText = document.getElementById("colorText").value
//     this.setState({color:colorText})
//   }

//   changeName = () =>
//   {
//     const nameText = document.getElementById("nameText").value
//     this.setState({name:nameText})
//   }


//   render()
//   {
//     return <div>
//       Color <input type='Text' placeholder='Enter color here' onChange={this.changeColor} id="colorText"></input>
//       <br/>
//       Name <input type='Text' placeholder='Enter name here' onChange={this.changeName} id="nameText"></input>
//       <InnerComponent color={this.state.color} name={this.state.name}/>
//     </div>
//   }
// }

  // state = {
  //   counter:0,
  //   innerComponent: <InnerComponent/>
  // }
  // constructor(props)
  // {
  //   super(props)
  //   console.log("I am inside Constructor")
  // }

  // static getDerivedStateFromProps()
  // {
  //   console.log("I am inside getDerivedStateFromProps")
  //   return true
  // }

  // shouldComponentUpdate()
  // {
  //   console.log("Inside shouldComponentUpdate")
  //   return true
  // }

  // incrementCounter = () => 
  // {
  //   //updating state on function call
  //   this.setState({counter:this.state.counter+1})

  //   this.setState({innerComponent: <div>Component is unmounted</div>})

  // }

  // // Overridden render function
  // render()
  // {
  //   console.log("Inside the render method")
  //   console.log(this.props)
  //   return (
  //       <div>
  //         <button onClick={this.incrementCounter}>Click me</button>
  //         <br/>
  //         Counter:{this.state.counter}
  //         <br/>
  //         {this.state.innerComponent}
  //       </div>
  //   )
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState)
  // {
  //   console.log("Inside getSnapshotBeforeUpdate")
  //   console.log("Previous Prop:")
  //   console.log(prevProps)
  //   console.log("Previous State:")
  //   console.log(prevState)
  //   console.log("--------------------")
  //   console.log("Updated Prop:")
  //   console.log(this.props)
  //   console.log("Update State:")
  //   console.log(this.state)
  //   return true
  // }

  // componentDidMount()
  // {
  //   console.log("I am inside componentDidMount")
  // }
  
//}
// function App(props)
// {
//   let [counter, setCounter] = useState(0)
//   //counter = 0
//   // console.log(props.color)
//   // console.log(props.size)
//   // console.log(props.clickEvent)
//   return (
//     <div className="App">
//       <button onClick={() => setCounter(counter+1)}>Click me</button>
//       <div>
//         Counter is:{counter}
//       </div>
//     </div>
//   );
// }

// function handleClick(event)
// {
//   event.preventDefault()
//   //console.log("handleClick is clicked")
//   let newTodo = document.getElementById("addTodo").value
//   let newTodoObject = {
//     id: new Date().getTime(),
//     text: newTodo,
//   }
//   //console.log("Text readed: "+newTodo)
//   // console.log(newTodoObject)
//   // //console.log(this.state)
//   //this.setState({counter:this.state.counter+1})
//   this.state.todo.push(newTodoObject)
//   this.setTodo({todo:this.state.todo})
//   console.log(this.state)
//   document.getElementById("addTodo").value = ""
//   this.state.todo.map((tempTodo) =>{
//     return ("ID: "+tempTodo.id+", Text: "+tempTodo.text)
//   })
//   //alert("clicked")
// }

// const [todos, setTodo] = useState([])

// function App(props)
// {
  
//   return (
//     <div>
//        <h1>ToDo list</h1>
//        <form onSubmit={this.handleClick}>
//          <input type="text" id='addTodo'/>
//          <button type='submit'>Add To-do</button>
//        </form>
//        <div>
//          {this.state.todo.map((tempTodo) =>
//         {
//           return <div>{tempTodo.text}</div>
//         })
//         }
//       </div>
//     </div>
//   );
// }

export default App;