import styled from 'styled-components';

import backgroundImg from '../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
  }

  input {
    background: #232129;
    border-radius: 12px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;

    & + input {
      margin-top: 8px;
    }
  }

  button {
    background: #ff9000;
    border-radius: 12px;
    height: 56px;
    color: #312e38;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    width: 100%;
    font-weight: 500;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
