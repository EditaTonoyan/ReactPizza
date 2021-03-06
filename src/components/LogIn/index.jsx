import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import { login } from "../../store/action";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();
  const { email, password, successMessage, errorMessage } = useSelector(
    (state) => state.registerState
  );

  const dispatch = useDispatch();

  const handleChange = (name, value) => {
    dispatch({ type: "ONCHANGE", name, value });
  };

  const onClickLogin = (values) => {
    if (email && password) {
      dispatch(login({ ...values }));
    }
  };

  const success = successMessage;
  const error = errorMessage;

  return (
    <>
      <div>
        <Link to="/joinus">
          <Button style={styles.SignIn}>Join Us</Button>
        </Link>
      </div>
      <div style={styles.Button}>
        <Link to="/">
          <div>
            <div style={styles.Row1}>
              <img style={styles.PiceOfPizza} src={piceOfPizza} alt="icon" />
              <h1 style={styles.H1}>
                <a style={styles.TitleLink} href="#">
                  REACT PIZZA
                </a>
              </h1>
            </div>
            <h4>
              <a style={styles.H4} href="#">
                Самая реактивная пицца
              </a>
            </h4>
          </div>
        </Link>
      </div>
      <hr style={styles.Hr} />
      <h1 style={styles.RegHeader}>SIGN IN</h1>
      <hr style={styles.HrOrderedList} />
      <Form
        style={styles.Form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
          password: "",
        }}
        onFinish={onClickLogin}
        onFieldsChange={([{ name = [], value }]) => handleChange(name[0], value)}
      >
        {errorMessage && (
          <div style={styles.ErrorMessage}>
            <span>
              <FontAwesomeIcon style={styles.Check} icon={faWindowClose} />
            </span>
            <span style={styles.Span}>{error}</span>
          </div>
        )}
        {successMessage && (
          <div style={styles.SuccessMessage}>
            <span>
              <FontAwesomeIcon style={styles.Check} icon={faCheck} />
            </span>
            <span style={styles.Span}>{success}</span>
          </div>
        )}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LogIn;
