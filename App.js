import React, {useState} from 'react';
import{fetchNumber} from './api/apiSerivce';
import './App.css';

function App() {
  const [numbers,setNumbers]=useState(null);
  const getNumber=async(type) => {
    const result=await
    fetchNumber(type);
    setNumbers(result);
  };
  return(
    <div>
      <h1>Calculator</h1>
      <button onClick={() => getNumber("p")}>Prime</button>
      <button onClick={()=> getNumber("f")}>Fibonacci</button>
      <button onClick={()=> getNumber("e")}>Even</button>
      <button onClick={()=> getNumber("r")}>Random</button>
      {numbers &&(
        <div>
          <h2> Numbers: {numbers.number?.join(", ")}</h2>
          </div>
      )}
    </div>
  );
}

export default App;
