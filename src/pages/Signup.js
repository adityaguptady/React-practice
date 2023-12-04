import { createStore } from "redux";

const reducer = (state = 0, action) =>
{
    switch(action.type)
    {
        case "+":
        {
            return state + action.payload;
        }
        case "-":
        {
            return state - action.payload;
        }
        default:
            return state;
    }
}

const store = createStore(reducer);

function SignUp()
{
    store.subscribe(() => {
        console.log("current state", store.getState());
       });
       
    const incrementCount = () =>
    {

        store.dispatch({
            type: "+",
            payload: parseInt(document.getElementById("value").value)
        });
        document.getElementById("value").value = ""
    }
     
    const decrementCount = () =>
    {
        store.dispatch({
            type: "-",
            payload: document.getElementById("value").value
        });
        document.getElementById("value").value = ""
    }

    return (
    <div>
        SignUp
        <br/>
        {/* Count: {store.getState()} */}
        <input id="value" type="text" placeholder="Enter value for operations"/>
        <br/>
        <button onClick={incrementCount}>Increment</button>
        <br/>
        <button onClick={decrementCount}>Decrement</button>
    </div>
    )
}
export default SignUp;