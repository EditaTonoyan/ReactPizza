import React from "react";
// import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styles } from "../../styles";
import { register } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import piceOfPizza from "../../assets/icons/piceOfPizza.png";

const JoinUs = () => {
  const { firstName, lastName, email, password, successMessage } = useSelector(
    (state) => state.registerState
  );
  const dispatch = useDispatch();

  console.log(successMessage);
  const onChange = (e) => {
    dispatch({ type: "ON_CHANGE", target: e.target });
  };

  const handleRegister = () => {
    if (firstName && lastName && email && password) {
      dispatch(register(firstName, lastName, email, password));
    }
  };
  const success = successMessage;
  return (
    <>
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
          <Input name="lastName" value={lastName} onChange={onChange} />
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
          <Input name="email" value={email} onChange={onChange} />
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
          <Input.Password name="password" value={password} onChange={onChange} />
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
