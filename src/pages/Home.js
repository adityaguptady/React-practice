import {useState, useEffect, createContext, useContext, useRef } from 'react';
import './Home.css'
import Component2 from './Component2';

export const UserContext = createContext()

function Home()
{
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


    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    //let count = 0;
    useEffect(() => {
      count.current = count.current + 1;
      console.log(count.current)
    });
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );


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
    //             <Component2/>
    //         </UserContext.Provider> 
    //     </div>)
}


export default Home;