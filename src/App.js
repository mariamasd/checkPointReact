import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> FORMULAIRE</h1>
    <Form>
      <Row className="mb-3 " >
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" /> <br></br><br></br>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword" className='pass'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" /><br></br><br></br>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1" >
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
        <Form.Label className='pass'>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group><br></br><br></br>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control /><br></br><br></br>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label  className='pass'>Zip</Form.Label>
          <Form.Control /><br></br><br></br>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label className='pass'>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select><br></br><br></br>
        </Form.Group>
        </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" /><br></br><br></br>
      </Form.Group>

      <Button variant="primary" type="submit" className='but'>
        Submit
      </Button>
    </Form>

    </div>
  );
}

export default App;
