import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import '../styles/RegisterStyles.css'
import {Link} from 'react-router-dom';

const Register = () => {

  //Form Handler
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
            <h3 className='h3' >Sign Up</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to='/login' className="m-4" >Existing User</Link>
          <button id="btn" className="btn btn-primary" type="submit" >Sign Up</button>
        </Form>
      </div>
    </>
  );
};

export default Register;
