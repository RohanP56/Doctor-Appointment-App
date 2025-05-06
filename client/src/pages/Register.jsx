import React from "react";
import { message, Form, Input } from "antd";
import axios from "axios";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  //Form Handler
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="h3">Sign Up</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to="/login" className="m-4">
            Existing User
          </Link>
          <button id="btn" className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;
