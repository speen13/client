import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { createBrands } from '../../http/deviceApi';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrands({ name: value }).then(() => setValue(''));
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
        <Modal.Title>Добавить Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Введите название типа'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
