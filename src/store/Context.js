import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const Cortex = (props) => {
  const [basket, setBasket] = useState([]);

  const value = { basket: basket };
};
