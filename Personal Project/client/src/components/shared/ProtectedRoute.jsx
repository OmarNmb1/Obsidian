import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

function ProtectedRoute({ children, allowed }) {
  const { user } = useUser();
  if (!user) return <Navigate to="/login" />;
  if (allowed && !allowed.includes(user.role)) return <Navigate to="/" />;
  return children;
}

export default ProtectedRoute; 