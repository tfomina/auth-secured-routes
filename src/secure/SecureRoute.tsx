import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useSecurity from "./useSecurity";

interface ISecureRouteProps {
  children?: React.ReactNode;
}

const SecureRoute = ({ children }: ISecureRouteProps) => {
  const { loggedIn } = useSecurity();
  const location = useLocation();

  return loggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default SecureRoute;
