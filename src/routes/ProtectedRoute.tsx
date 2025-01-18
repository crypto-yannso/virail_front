import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "@/providers/AuthProvider";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, loading } = useAuthState();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
