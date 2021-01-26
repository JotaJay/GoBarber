import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './style';
import logo from '../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="GoBarber" />
          <form>
            <h1>Sign In</h1>
            <input placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign In</button>
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
