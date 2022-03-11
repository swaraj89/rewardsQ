import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SignIn, SignUp, ForgotPassword } from "./components";
import { Landing } from "./containers";

import { AuthService } from "./services";

function App() {
  const signInHandler = async (user: any) => {
    console.log(user);

    const aUser = await AuthService.signIn(user.email, user.password);

    console.log(aUser);
  };

  const signUpHandler = (user: any) => {
    console.log(user);
  };

  const forgotPasswordHandler = (user: any) => {
    console.log(user);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route
              path="signin"
              element={<SignIn onSignIn={signInHandler} />}
            />
            <Route
              path="signup"
              element={<SignUp onSignUp={signUpHandler} />}
            />
            <Route
              path="forgot"
              element={
                <ForgotPassword onForgotPassword={forgotPasswordHandler} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
