import React from 'react';
import SignIn from './pages/signIn/Signin';
import SignUp from './pages/signUp/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      {/* <SignIn /> */}
      <SignUp />
      <GlobalStyle />
    </>
  );
};

export default App;
