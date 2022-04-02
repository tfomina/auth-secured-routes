import React from "react";
import { Button } from "antd";
import useSecurity from "../../secure/useSecurity";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useSecurity();

  const handleLogout = async () => {
    navigate("/");
    await logout();
  };

  return (
    <Button type="primary" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
