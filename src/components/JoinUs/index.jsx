import React from "react";
// import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { faCheck, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../../styles";
import { register } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";
import { useHistory } from "react-router-dom";

const JoinUs = () => {
  let history = useHistory();
  const { firstName, lastName, email, password, successMessage, errorMessage } = useSelector(
    (state) => state.registerState
  );

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({ type: "ON_CHANGE", target: e.target });
  };

  const handleRegister = () => {
    if (firstName && lastName && email && password) {
      dispatch(register(firstName, lastName, email, password, history));
    }
  };
  const error = errorMessage;
  const success = successMessage;
  return (
    <>
      <div>
        <Link to="/login">
          <Button style={styles.SignIn}>Sign In</Button>
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

      <h1 style={styles.RegHeader}>Registration</h1>
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
        }}
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
          label="FirstName"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your firsName!",
            },
          ]}
        >
          <Input placeholder="firstName" name="firstName" value={firstName} onChange={onChange} />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="LastName"
          rules={[
            {
              required: true,
              message: "Please input your lastName!",
            },
          ]}
        >
          <Input placeholder="lastName" name="lastName" value={lastName} onChange={onChange} />
        </Form.Item>

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
          <Input placeholder="email" name="email" value={email} onChange={onChange} />
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
          <Input.Password
            placeholder="password"
            name="password"
            value={password}
            onChange={onChange}
          />
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
          <Button onClick={handleRegister} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default JoinUs;
