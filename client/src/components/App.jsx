import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Registration from './authorization/Registration';
import './app.css';
import Login from './authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../actions/user';
import Disk from './disk/Disk';

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='wrap'>
          {!isAuth ? (
            <Routes>
              <Route
                path='/registration'
                element={<Registration />}
              />
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='*'
                element={<Navigate to='/login' />}
              />
            </Routes>
          ) : (
            <Routes>
              <Route
                path='/'
                element={<Disk />}
              />
              <Route
                path='*'
                element={<Navigate to='/' />}
              />
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
