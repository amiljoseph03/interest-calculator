import './App.css';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

function App() {
  return (
    <>
      <h1> Simple Interest Calculator</h1>

      <FloatingLabel controlId="floatingAmount" label="Amount">
        <Form.Control type="number" placeholder="Amount" />
      </FloatingLabel>

      <br />

      <FloatingLabel controlId="floatingYear" label="Year">
        <Form.Control type="number" placeholder="Year" />
      </FloatingLabel>

      <br />

      <FloatingLabel controlId="floatingROI" label="Rate of Interest">
        <Form.Control type="number" placeholder="Rate of Interest" />
      </FloatingLabel>

      <br />

      <Button className="btn btn-primary mx-2">Submit</Button>
      <Button className="btn btn-danger">Reset</Button>
    </>
  )
}

export default App
