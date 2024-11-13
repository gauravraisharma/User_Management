import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React from 'react';

const PrivateRoute = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;