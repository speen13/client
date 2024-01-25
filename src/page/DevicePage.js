import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
// import Star1 from '../assets/Star1.png';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import BasketShop from '../components/modals/BasketShop';

const DevicePage = observer(() => {
  const { device } = useContext(Context);

  const [basketVisible, setBasketVisible] = useState(false);

  const [devices, setDevice] = useState({ info: [] });
  const { id } = useParams();

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    fetchOneDevice(id).then((data) => setBasket(data));
  }, []);

  const dablCkick = () => {
    setBasketVisible(true);
    device.increment();
    device.setBasket(basket);
    // localStorage.setItem('price', JSON.stringify(basket));

    // console.log(basket);
  };

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + devices.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{devices.name}</h2>

            {/* <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${Star1}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div> */}
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3> {devices.price} грн.</h3>
            <Button variant={'outline-dark'} onClick={() => dablCkick()}>
              Добавить в корзину
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики</h1>
        {devices.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? 'lightgray' : 'transparent',
              padding: 10,
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
      <BasketShop
        show={basketVisible}
        onHide={() => setBasketVisible(false)}
        device={devices}
      />
    </Container>
  );
});

export default DevicePage;
