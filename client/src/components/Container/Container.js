import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StackWrapper from "../Stack/Stack";
import CardWrapper from '../Card/Card';

function Wrapper() {
  const [country, setCountry] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const getAllCountry = async () => {
      const country = await axios.get("http://localhost:4000/country/");
      setCountry(country.data.data);
    }
    getAllCountry();
  }, []);

  const handleClick = (selected) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelected(selected)
  }

  return (
    <Container >
      <Row>
        <Col>
          {country.map((list,index) => <StackWrapper key={index} list={list} handleClick={handleClick} />)}
        </Col>

        <Col>{selected && <CardWrapper selected={selected}/>}</Col>
      </Row>
    </Container>
  );
}

export default Wrapper;
