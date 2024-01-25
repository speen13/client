import React, { useContext } from 'react';
import { Context } from '../../index';

import { observer } from 'mobx-react-lite';

const BasketBall = observer(() => {
  const { device } = useContext(Context);

  return <div>{` ${device.count}`}</div>;
});

export default BasketBall;
