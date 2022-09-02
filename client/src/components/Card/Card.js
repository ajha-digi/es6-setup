import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import SkeletonWrapper from "../Skeleton/Skeleton";
import DropdownWrapper from "../Dropdown/Dropdown";

function CardWrapper({selected}) {
  const {name,capital,currency,language,flag,dialling_code,code, region} = selected;
  const [flagSrc, setFlagSrc] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const getCountryFlag = async () => {
      setIsLoading(true)
      const countryCode = code.toLowerCase();
      const flagSrc = await axios.get(`https://countryflagsapi.com/png/${countryCode}`);
      console.log("flagSrc",flagSrc.config.url);
      setFlagSrc(flagSrc.config.url);
      setIsLoading(false)
    }
    getCountryFlag();
  },[flag]);

  return (
    <Card style={{ width: '18rem' }}>
      {
        isLoading ? <SkeletonWrapper /> : <img variant="top" src={flagSrc} />
      }
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{`Capital : ${capital}`}</ListGroup.Item>
        <ListGroup.Item>{`Region : ${region}`}</ListGroup.Item>
        <ListGroup.Item>{`Dialling Code : ${dialling_code}`}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <DropdownWrapper currency={currency}/>
        <DropdownWrapper language={language}/>
      </Card.Body>
    </Card>
  );
}

export default CardWrapper;