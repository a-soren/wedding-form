import React from "react";
import styled from "styled-components";
import "./App.css";

const Card = styled.main`
  background-color: #660000;
  color: #b3d9ff;
  font-family: "sans-seriff";
`;
const Input = styled.input`
  width: 75%;
  padding: 15%;
  margin-bottom: 25px;
`;
const Button = styled.button`
  width: 75px;
  display: "flex";
  justify-content: "center";
`;

function App() {
  return (
    <Card>
      <h1>Please Fill Out The Form Below</h1>
      <h2>This Will Be How We Address Your Invitations!</h2>
      <p>
        Please use your Mailing Address and Names you'd like them addressed to.
      </p>
      <br />
      <Input type="text" name="name" placeholder="Your Name" />
      <Input type="text" name="address" placeholder="Your Street Address" />
      <Input type="text" name="city" placeholder="Your City" />
      <Input type="text" name="state" placeholder="Your State" />
      <Input type="text" name="zip" placeholder="Your Zip Code" />
      <br></br>
      <Button type="submit">Submit Your Address</Button>
    </Card>
  );
}

export default App;
