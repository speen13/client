import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../http/deviceApi';

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addType = () => {
    createType({ name: value }).then(() => setValue(''));
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Добавить тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={'Введите название типа'}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
