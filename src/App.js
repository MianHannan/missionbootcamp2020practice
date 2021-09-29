import React from 'react'

export default function App() {
  
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1>Use State Hook Practice</h1>
      <h2>{"Counter Value is : "+counter}</h2>
      <div>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
        <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
      </div>

    </div>
  )
}
