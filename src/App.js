import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
// or less ideally
import { Card, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>will using react bootstrap</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Button variant="danger">main btn</Button>
    </div>
  );
}

export default App;
