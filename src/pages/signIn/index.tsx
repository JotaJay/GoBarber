import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import logo from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './style';

const SignIn: React.FC = () => {
  const handleSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              icon={FiLock}
            />
            <Button type="submit">Sign In</Button>
            <a href="forgot">Forgot my password</a>
          </Form>
          <a href="signup">
            <FiLogIn /> Sign Up
          </a>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default SignIn;
