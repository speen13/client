import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utils/consts';

const BasketShop = ({ show, onHide, device }) => {
  const navBasket = useNavigate();

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Корзина</Modal.Title>
      </Modal.Header>
      <Modal.Body>{`Товар ${device.name}, за ценой ${device.price}грн уже в корзине`}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Продолжить покупки
        </Button>

        <Button variant="primary" onClick={() => navBasket(BASKET_ROUTE)}>
          Оформить заказ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BasketShop;
