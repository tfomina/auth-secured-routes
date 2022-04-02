import React from "react";
import { Button } from "antd";
import useSecurity from "../../secure/useSecurity";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useSecurity();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
