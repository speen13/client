import React, { useContext, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from '../utils/consts';
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import BasketBall from './modals/BasketBall';

const NavyBar = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setAdmin('USER');
  };

  const check = () => {
    history(LOGIN_ROUTE);
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <NavLink style={{ color: 'black' }} to={SHOP_ROUTE}>
            Главная
          </NavLink>
          {user.admin === 'ADMIN' ? (
            <Nav className="ms-auto" style={{ color: 'white' }}>
              <Button
                variant={'outline-primary'}
                onClick={() => history(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
              <Button
                variant={'outline-primary'}
                className="ms-2"
                onClick={() => logOut()}
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            <Nav className="ms-auto" style={{ color: 'white' }}>
              <Button variant={'outline-primary'} onClick={check}>
                Авторизация
              </Button>
            </Nav>
          )}
          <Nav className="ms-2" style={{ color: 'white' }}>
            <Button
              variant={'outline-primary'}
              onClick={() => navigate(BASKET_ROUTE)}
            >
              <i className="bi bi-cart-check-fill">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart-check-fill "
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
                </svg>
                <BasketBall className="ms-2" />
              </i>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
});

export default NavyBar;
