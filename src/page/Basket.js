import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { sendMail } from '../http/userApi';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import EndOrder from '../components/modals/EndOrder';

const Basket = observer(() => {
  const { device } = useContext(Context);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [posht, setPosht] = useState('');
  const [basketVisible, setBasketVisible] = useState(false);

  const deleteBaket = (e) => {
    device.filterBasket(e);
    device.discrement();
  };

  const onHandler = () => {
    setName('');
    setTel('');
    setPosht('');
    device.endBasket([]);
    device.endDiscrement(0);
  };

  const order = () => {
    const result = device.basket.map((e) => e.name);

    sendMail(result, sum, name, tel, posht);
    onHandler();
    setBasketVisible(true);
  };

  let sum = device.basket.reduce((acc, b) => acc + b.price, 0);

  return (
    <div className="container">
      <h1>Корзина</h1>
      <div className="d-flex justify-content-center">
        {device.basket.map((el) => (
          <Card className="ms-3 center" key={el.id} style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src={process.env.REACT_APP_API_URL + el.img}
            />
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{`${el.price} гривен`}</Card.Text>
            </Card.Body>
            <Button onClick={() => deleteBaket(el.id)}>Удалить товар</Button>
            {/* <Button>Добавить</Button> */}
          </Card>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-2">
        {device.count > 0 ? (
          <p className="ms-2">{`Общая сумма заказа ${sum} гривен`}</p>
        ) : (
          <p>Ваша корзина пуста</p>
        )}
      </div>
      <div>
        {device.count > 0 && (
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Имя Фамилия"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Номер Телефона">
              <Form.Control
                type="text"
                placeholder="Password"
                onChange={(e) => setTel(e.target.value)}
                value={tel}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Адресс и служба доставки"
              className="mt-3"
            >
              <Form.Control
                type="text"
                placeholder="Password"
                onChange={(e) => setPosht(e.target.value)}
                value={posht}
              />
            </FloatingLabel>
          </>
        )}
      </div>
      {device.count > 0 && (
        <Button onClick={order} className="mt-3">
          Оформить заказ
        </Button>
      )}
      <EndOrder show={basketVisible} onHide={() => setBasketVisible(false)} />
    </div>
  );
});

export default Basket;
