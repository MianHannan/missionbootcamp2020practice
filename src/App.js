import React from 'react'

export default function App() {
  

  const [apiCall,setApiCall] = React.useState(1);

  React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/'+apiCall)
    .then(res=>res.json())
    .then(response=>setTodo(response));
  },[apiCall]);

  const [todo,setTodo] = React.useState({
      "userId": 0,
      "id": 0,
      "title": "This is initial value of ToDo Task",
      "completed": false
    });

  const [bgColor, setbgColor] = React.useState("red");
  
  return (
    <div>
      <h1>React useEffect with Promises & fetch API</h1>
      <div>
        <h2>{apiCall}</h2>
        <button onClick={()=>{setApiCall(apiCall+1);setbgColor(todo.completed?"green":"red")}}>Call API</button>
      </div>
      <hr />
      <div style={{backgroundColor:bgColor}}>
        <h2>{todo.title}</h2>
        <span>{"Todo ID : "+todo.id}</span>
        <br />
        <span>{"User ID : "+todo.userId}</span>
      </div>
    </div>
  )
}
