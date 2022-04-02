import React from "react";
import { Typography } from "antd";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useSecurity from "../../secure/useSecurity";
import { useLocation, useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

export interface ILocationState {
  from: {
    pathname: string;
  };
}

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { login } = useSecurity();

  const onFinish = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    await login(username, password);

    navigate((state as ILocationState)?.from || "/");
  };

  return (
    <div className="login">
      <Title>Login</Title>
      <Paragraph>You need to log in (hint: try admin/admin1234)</Paragraph>
      <Form
        name="login"
        className="login-form"
        initialValues={{ username: "admin", password: "admin1234" }}
        onFinish={onFinish}
        noValidate
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
