import React from 'react'

export default function App() {

  const initialState = {
    count : 0,
    change : 1,
    show : true
  };

  const reducer = (state,action)=>{
    switch(action.type){
      case "decrement":
        return {
          ...state,
          count:state.count-state.change
        };
      case "increment":
      return {
        ...state,
        count:state.count+state.change
      };
      case "change":
        return {
          ...state,
          change:action.change
        };
      case "toggle":
        return {
          ...state,
          show:!state.show
        };
      default:
        return state;
    }
  }

  const [counterState, changeCounter] = React.useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Use Reducer Hook Practice</h1>
      <h2>{"Counter Value is : "}
        <span>{counterState.show?counterState.count:null}</span>
      </h2>
      <h2>{"Count Change is : "}
        <input 
          type='number' 
          value={counterState.change} 
          onChange={(event)=>{
            changeCounter({
              type:"change",
              change:event.target.value*1
              })}}
          ></input>
      </h2>
      <div>
        <button onClick={()=>{changeCounter({type:"decrement"})}}>Decrement</button>
        <button onClick={()=>{changeCounter({type:"toggle"})}}>Toggle</button>
        <button onClick={()=>{changeCounter({type:"increment"})}}>Increment</button>
      </div>
      <div>
        <button onClick={()=>{console.log(counterState)}}>Console Log</button>
      </div>


    </div>
  )
}
