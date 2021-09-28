import React, { useEffect } from "react";
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
  const { successMessage, errorMessage } = useSelector((state) => state.registerState);

  console.log("successMessage", successMessage);

  const dispatch = useDispatch();

  const onChange = (name, value) => {
    dispatch({ type: "ONCHANGE", name, value });
  };

  const handleRegister = (values) => {
    dispatch(register({ ...values, history }));
  };

  useEffect(() => {
    if (successMessage !== "") {
      setTimeout(() => {
        dispatch({ type: "SUCCESS_MESSAGE", successMessage: "" });
        history.push("/login");
      }, 2000);
    }
  }, [successMessage, history, dispatch]);

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
        onFinish={handleRegister}
        onFieldsChange={([{ name = [], value }]) => onChange(name[0], value)}
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
          <Input
            placeholder="firstName"
            // value={firstName} //սկզբից input-ում երևալու է state-ից եկած default արժեքը(դատարկ string)
            // onChange={(e) => onChange("firstName", e.target.value)}
            //onChange-ի ժամանակ որպես արգումենտ ուղարկում եմ name("firstname"),value-ն(input -ի մեջ գրվածը`e.target.value),
            //եթե e.target.value-ի փոխարեն նորից դնում եմ registerState-ի firstName-ը, ստացվում ա, որ որպես արգումենտ
            //էլի ուղարկում եմ դատարկ string, (//onChange={() => onChange("firstName",firstName)})
          />
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
          <Input placeholder="lastName" />
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default JoinUs;
