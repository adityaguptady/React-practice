import { useContext } from "react";
import { UserContext } from "./Home";

function Component5() 
  {
    const user = useContext(UserContext)
    console.log(user)
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }
  

export default Component5;