import {useState, useEffect, createContext, useContext } from 'react';
import './Home.css'
import Component2 from './Component2';

export const UserContext = createContext()

function Home()
{
    const [user, setUser] = useState("Aditya the teacher");
    var [count, setCount] = useState(0);
    var [student, setStudent] = useState(
        {
            name:"Aditya Gupta",
            rollNumber: 111,
            contact: 9988776699,
            address: "101, jhwvckjsbdvckjsbdvkjsdbv"
        });

    var updateData = () =>
    {
        console.log("updateData")
        console.log(student)
        setStudent(student => 
            {
                return { ...student, name: "Ayush"}
            });
        console.log(student)
        setCount(1)
    }    

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
    return (<div id="myID">
            Home
            <div>This is my Name: {student.name}</div>
            <div>This is my Roll Number: {student.rollNumber}</div>
            <div>This is my Contact: {student.contact}</div>
            <div>This is my Address: {student.address}</div>
            <button onClick={()=>updateData()}>Update Data</button>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2/>
            </UserContext.Provider>
        </div>)
}


export default Home;