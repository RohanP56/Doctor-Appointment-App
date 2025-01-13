import React from "react";
import { Form, Input } from "antd";
import '../styles/RegisterStyles.css'
import {Link} from 'react-router-dom';

const Login = () => {

  //Form Handler
  const onFinishHandler = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
            <h3 className='h3' >Login</h3>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Link to='/register' className="m-4" >New User</Link>
          <button id="btn" className="btn btn-primary" type="submit" >Login</button>
        </Form>
      </div>
    </>
  );
};

export default Login;
