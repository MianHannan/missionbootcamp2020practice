import React from 'react'

export default function App() {
  
  const [counter, setCounter] = React.useReducer(
    (state,action)=>{
      switch(action.type){
        case "increment":
          return {count : state.count+action.value, show: state.show};
        case "decrement":
          return {count : state.count-action.value, show: state.show};
        case "toggle":
          return {count : state.count, show: !state.show};
        default:
          return state;
      }
    },{
      count:0,
      show:true
    });

  return (
    <div>
      <h1>Use Reducer Hook Practice</h1>
      <h2>Counter Value is : <span>{counter.show?counter.count:null}</span></h2>
      <div>
        <button onClick={()=>{setCounter({type:"decrement",value:5})}}>Decrement</button>
        <button onClick={()=>{setCounter({type:"toggle"})}}>Toggle</button>
        <button onClick={()=>{setCounter({type:"increment",value:5})}}>Increment</button>
      </div>

    </div>
  )
}
