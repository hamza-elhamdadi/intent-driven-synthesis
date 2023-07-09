import ReactSlider from 'react-slider';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container className='App'>
      <Row>
        
      </Row>
      <Row>
        <Col xs={12} sm={12} md={8} lg={8} xl={6}>
          <ReactSlider 
            className="customSlider"
            thumbClassName="customSlider-thumb"
            trackClassName="customSlider-track"
            min={0}
            max={7}
            onChange={d => console.log(d)}
          />
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
