import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./login-form.module.css";
import { useContext } from "react";
import { AuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useAuthorizationMutation } from "../../services/userApi";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [authorization] = useAuthorizationMutation();

  const onFinish = async (credentials: any) => {
    const { domainName, domainPassword } = credentials;
    const isLoggedIn = await authorization({
      domainName,
      domainPassword,
    });
    if (isLoggedIn.data) {
      login();
      navigate("/");
    }
  };

  return (
    <>
      <Form
        form={form}
        className={styles.form}
        autoComplete={"off"}
        onFinish={onFinish}
      >
        <Form.Item
          name="domainName"
          rules={[
            {
              required: true,
              type: "string",
              message: "Please enter Username",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="domainPassword"
          rules={[
            {
              required: true,
              type: "regexp",
              message: "Please enter password",
            },
          ]}
          hasFeedback
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {/*<Form.Item>*/}
        {/*  <a className="login-form-forgot" href="">*/}
        {/*    Forgot password*/}
        {/*  </a>*/}
        {/*</Form.Item>*/}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          {/*<hr />*/}
          {/*Or <a href="">register now!</a>*/}
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
