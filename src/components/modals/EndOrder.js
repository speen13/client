import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';

const EndOrder = ({ show, onHide }) => {
  const navigate = useNavigate();

  const hisory = () => {
    navigate(SHOP_ROUTE);
  };

  const finish = () => {
    onHide();

    hisory();
  };

  return (
    <div>
      {' '}
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
        <Modal.Body>
          <h3>
            Ваш заказ поступил в обработку,наш менеджер свяжется с Вами в
            ближайщее время!<h4>Спасибо,что выбрали нас!</h4>
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={finish}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EndOrder;
