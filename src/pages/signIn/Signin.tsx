import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber" />
          <form>
            <h1>Sign In</h1>
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              icon={FiLock}
            />
            <Button type="submit">Sign In</Button>
            <a href="forgot">Forgot my password</a>
          </form>
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
