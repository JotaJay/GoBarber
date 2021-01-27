import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/input';
import Button from '../../components/button';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber" />
          <form>
            <h1>Sign Up</h1>
            <Input name="name" placeholder="Name" icon={FiUser} />
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              icon={FiLock}
            />
            <Button type="submit">Sign Up</Button>
          </form>
          <a href="signup">
            <FiArrowLeft /> Back to Sign In
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
