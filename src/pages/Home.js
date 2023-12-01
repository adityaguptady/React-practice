import { useCallback, useMemo, useReducer, useState } from 'react'
import './Home.css'
import Todos from "../pages/Todos";
import { Button, Navbar, NavbarBrand, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//Use Callback
const Home = () =>
{
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1","Todo 2"]);

  const increment = () =>
  {
    setCount((countTemp)=> countTemp+1)
  }

  // const addTodo = useCallback(() =>
  // {
  //   setTodos((tempTodo) => [...tempTodo, "Todo 3"]);
  // }, [todos])

  const addTodo = () =>
  {
    setTodos((tempTodo) => [...tempTodo, "Todo 3"]);
  }

  const expensiveCalculation = (num) => 
  {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) 
    {
      num += 1;
    }
    return num;
   };

   const calculation = useMemo(()=>expensiveCalculation(count), [count]) ;


  return (
    <>
      <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
      {/* <Todos todos={todos} addTodo={addTodo} /> */}
      <button onClick={addTodo}>Add Todo</button>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
       {calculation}
       {/* <Button color="danger">Danger!</Button> */}
       <Button color="primary">
          primary
        </Button>

        <Button color="danger">Danger!</Button>

        <Navbar
          className="my-2"
          color="dark"
          dark
        >
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="/logo-white.svg"
              style={{
                height: 40,
                width: 40
              }}
            />
          </NavbarBrand>
        </Navbar>
  
        <Navbar
          className="my-2"
          color="secondary"
          dark
        >
          <NavbarBrand href="/">
            Reactstrap
          </NavbarBrand>
        </Navbar>
  
        <Navbar
          className="my-2"
          color="dark"
          dark
        >
          <NavbarBrand href="/">
            <img
              alt="logo"
              src="/logo-white.svg"
              style={{
                height: 40,
                width: 40
              }}
            />
            Reactstrap
          </NavbarBrand>
        </Navbar>

        <Table
        >
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                First Name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                1
              </th>
              <td>
                Mark
              </td>
              <td>
                Otto
              </td>
              <td>
                @mdo
              </td>
            </tr>
            <tr>
              <th scope="row">
                2
              </th>
              <td>
                Jacob
              </td>
              <td>
                Thornton
              </td>
              <td>
                @fat
              </td>
            </tr>
            <tr>
              <th scope="row">
                3
              </th>
              <td>
                Larry
              </td>
              <td>
                the Bird
              </td>
              <td>
                @twitter
              </td>
            </tr>
          </tbody>
        </Table>

      </div>
    </>
  );
 
  
   

}

//Memoization
// const Home = () =>
// {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["Todo 1","Todo 2"]);

//   const increment = () =>
//   {
//     setCount((countTemp)=> countTemp+1)
//   }

//   const addTodo = () =>
//   {
//     setTodos((tempTodo) => [...tempTodo, "Todo 3"]);
//   }

//   return (
//     <>
//       <Todos todos={todos} />
//       <button onClick={addTodo}>Add Todo</button>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
        
//       </div>
//     </>
//   );
 

// }

//use Reducer
// var initialTodo = [
//   {
//     id: 1,
//     text: "Todo 1",
//     completed: false,
//   },
//   {
//     id: 2,
//     text: "Todo 2",
//     completed: false,
//   }
// ]

// const reducer = (state, action) =>
// {
//  switch (action.type)
//  {
//    case "COMPLETE":
//      return state.map((todo) =>
//      {
//        if (todo.id === action.id)
//        {
//          return { ...todo, complete: !todo.complete };
//        }
//        else
//        {
//          return todo;
//        }
//      });
//    default:
//      return state;
//  }
// };

// function Home()
// {
//   const [todos, dispatch] = useReducer(reducer, initialTodo);
//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };
//   console.log(todos)
//   return <>
//     <div>
//       {todos.map((todo)=>
//       (
//         <label>
//           <input
//             type='checkbox'
//             checked={todo.completed}
//             onChange={()=>handleComplete(todo)}
//           />
//           {todo.text}
//         </label>
//         ))}
//         <button onClick={()=>printState()}>Print</button>
//     </div>
//   </>

// }
export default Home;

//export const UserContext = createContext()


//useRef problem number 3
  // function Home()
  // {
  //   const [inputValue, setInputValue] = useState("");
  //   const previousInputValue = useRef("");
  //   useEffect(() => {
  //     previousInputValue.current = inputValue;
  //   }, [inputValue]);
  //   return (
  //     <>
  //       <input
  //         type="text"
  //         value={inputValue}
  //         onChange={(e) => setInputValue(e.target.value)}
  //       />
  //       <h2>Current Value: {inputValue}</h2>
  //       <h2>Previous Value: {previousInputValue.current}</h2>
  //     </>
  //   );
  // }
  // export default Home;

    // const [user, setUser] = useState("Aditya the teacher");
    // var [count, setCount] = useState(0);
    // var [student, setStudent] = useState(
    //     {
    //         name:"Aditya Gupta",
    //         rollNumber: 111,
    //         contact: 9988776699,
    //         address: "101, jhwvckjsbdvckjsbdvkjsdbv"
    //     });

    // var updateData = () =>
    // {
    //     console.log("updateData")
    //     console.log(student)
    //     setStudent(student => 
    //         {
    //             return { ...student, name: "Ayush"}
    //         });
    //     console.log(student)
    //     setCount(1)
    // }    

    // class Student 
    // {
    //   name
    //   static address
    //   rollNumber
    //   printStudent()
    //   {
    //     console.log("Name: "+this.name)
    //     console.log("Address: "+this.address)
    //     console.log("RollNumber: "+this.rollNumber)
    //   }
    // }

    // let student1 = new Student()
    // student1.name = "Aditya"
    // student1.address = "SSi, bhawarkua"
    // student1.rollNumber =111
    // student1.printStudent()

    // let student2 = new Student()
    // student2.name = "Ayush"
    // console.log(Student.address)

  //useRef problem number 1
    // const [inputValue, setInputValue] = useState("");
    // const count = useRef(0);
    // //let count = 0;
    // useEffect(() => {
    //   count.current = count.current + 1;
    //   console.log(count.current)
    // });

    


    // useEffect(() => {
    //     setTimeout(() => {
    //       console.log("This is triggerred now!!!")
    //     }, 4000);
    //   }, count);

    // const styleObj = {
    //     color: "black",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Sans-Serif"
    // }
    // return (<div id="myID">
    //         Home
    //         <div>This is my Name: {student.name}</div>
    //         <div>This is my Roll Number: {student.rollNumber}</div>
    //         <div>This is my Contact: {student.contact}</div>
    //         <div>This is my Address: {student.address}</div>
    //         <button onClick={()=>updateData()}>Update Data</button>
    //         <UserContext.Provider value={user}>
    //             <h1>{`Hello ${user}!`}</h1>
    //             <Component5/>
    //         </UserContext.Provider> 
    //     </div>)
