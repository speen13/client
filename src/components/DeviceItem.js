import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const history = useNavigate();
  function handleClick() {
    history(DEVICE_ROUTE + '/' + device.id);
  }
  return (
    <Col md={3} className={'mt-3'} onClick={handleClick}>
      <Card style={{ width: 150, cursor: 'pointer', border: 'light' }}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>{device.price} грн</div>
          <div>{/* <div>{device.rating}</div> */}</div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
