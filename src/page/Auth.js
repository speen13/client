import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { stopBad, login, registration } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
  const history = useNavigate();
  const { user } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('');

  useEffect(() => {
    stopBad().then((res) => {
      setAdmin(res);
    });
  }, []);

  // const resetNamePassword = () => {
  //   // setEmail('');
  //   // setPassword('');
  // };

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      if (admin === 'ADMIN') {
        user.setAdmin(admin);
        user.setIsAuth(true);
      }
      // resetNamePassword();
      // console.log(user.admin);
      // console.log(admin);
      // console.log(user.isAuth);

      user.setUser(user);

      history(SHOP_ROUTE);

      // console.log(email, password);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pr-3 ps-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаун?
                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={click}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
