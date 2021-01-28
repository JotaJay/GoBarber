import React, { useCallback, useState } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

import { Container, Content, Background } from './style';

const SignUp: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = (data: Record<string, unknown>): void => {
    console.log(data);
  };

  const handleBlur = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logo} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
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
          </Form>
          <a href="/">
            <FiArrowLeft /> Back to Sign In
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
