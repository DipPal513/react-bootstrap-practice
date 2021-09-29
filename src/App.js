import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
// or less ideally
import { Card, Button, Col, Row,Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import News from "./Component/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2021-09-29&sortBy=popularity&apiKey=e1c0a8d8d7bf41a79c65a3f38e1b2cfe"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="container">
    { news.length === 0 ?
    <Spinner animation="border" role="status" className = 'mySpinner'>
    
  </Spinner>
    
    :   
    <Row xs={1} md={3} className="g-4">
        {news.map((nw) => (
          <News news={nw} />
        ))} 

      </Row>}
    </div>
  );
}

export default App;
