import './App.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useState } from 'react';
function App() {




const[amount,setAmount]=useState(0)
const[year,setYear]=useState(0)
const[rate,setRate]=useState(0)

const[answer,setAnswer]=useState(0)

console.log(amount)
console.log(year)
console.log(rate)

// equation 
const calculate = (e)=>{
  const output = (amount*year*rate/100)
  console.log(output)
  setAnswer(output)
}






  return (
    <>
      <h1> Simple Interest Calculator</h1>

      <FloatingLabel controlId="floatingAmount" label="Amount">
        <Form.Control
          type="number"
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </FloatingLabel>

      <br />

      <FloatingLabel controlId="floatingYear" label="Year">
        <Form.Control
          type="number"
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
        />
      </FloatingLabel>

      <br />

      <FloatingLabel controlId="floatingROI" label="Rate of Interest">
        <Form.Control
          type="number"
          placeholder="Rate of Interest"
          onChange={(e) => setRate(e.target.value)}
        />
      </FloatingLabel>

      <br />

      <FloatingLabel controlId="floatingAnswer" label="Answer">
        <Form.Control type="text" placeholder="Answer" disabled />
      </FloatingLabel>

      <br />

      <Button
      onClick={e=>calculate(e)} 
      
      className="btn btn-primary mx-2">Submit</Button>
      <Button className="btn btn-danger">Reset</Button>

      <div>
        <h2>&#8377; {answer}</h2>
        <p>your total interest</p>
      </div>
    </>
  );
}

export default App;
