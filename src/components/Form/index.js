import React, { useState } from "react";
import { Container, FormContainer, Header, FormBody, Fields } from "./styles";

const Form = (props) => {
  const [isSignUp, setIsSighUp] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
    const [data, setData] = useState({name: "", email: "", password: "", confirmPassword: ""});
  const handleForm = (val) => {
    if (val === isSignUp) {
        // cll the api
      console.log("call the api");
    } else {
      setIsSighUp(val);
      console.log("change the form");
    }
    // setName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    setData({name: "", email: "", password: "", confirmPassword: ""});
  };

  const handleFormUpdate = (event) => {
    console.log('event.target.name', event.target.name)
    const field = event.target.name;
    const value = event.target.value;
    let newData;
    if(field === 'name'){
        newData = {...data, name: value}
    }else if (field === 'email'){
        newData = {...data, email: value};
    }else if(field === 'password') {
        newData = {...data, password: value};
    }else{
        newData = {...data, confirmPassword: value};
    }
    setData(newData);
  }
  return (
    <Container>
      <FormContainer>
        <Header>{isSignUp ? "Sign Up" : "Sign In"}</Header>
        {isSignUp ? (
          <FormBody>
            <Fields>
              <label>Name:</label>
              <input
                type="text"
                placeholder="Name"
                value={data.name}
                name="name"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                name="email"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                name="password"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                name="confirmPassword"
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields btn>
              <input
                className={isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignUp"
                onClick={() => handleForm(true)}
              />
              <input
                className={!isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignIn"
                onClick={() => handleForm(false)}
              />
            </Fields>
          </FormBody>
        ) : (
          <FormBody>
            <Fields>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => handleFormUpdate(e)}
              />
            </Fields>
            <Fields btn>
              <input
                className={isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignUp"
                onClick={() => handleForm(true)}
              />
              <input
                className={!isSignUp ? "active" : "in-active"}
                type="submit"
                value="SignIn"
                onClick={() => handleForm(false)}
              />
            </Fields>
          </FormBody>
        )}
      </FormContainer>
    </Container>
  );
};

export default Form;
