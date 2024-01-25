import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavyBar from './components/NavyBar';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from './index';
import { check } from './http/userApi';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then(() => {
        user.setUser(true);
        user.setIsAuth(true);
      })

      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <NavyBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
