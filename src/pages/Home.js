import { useState } from 'react';
import './Home.css'

function Home()
{
    const [student, setStudent] = useState(
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
    }    

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
        </div>)
}
export default Home;