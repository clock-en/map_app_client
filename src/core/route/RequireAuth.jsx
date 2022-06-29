import React from 'react';
import { PropTypes } from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('identified_token') ?? null;
  const location = useLocation();
  if (!token) {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  }
  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
