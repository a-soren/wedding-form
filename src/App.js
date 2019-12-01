import React from "react";
import styled from "styled-components";
import "./App.css";

const Card = styled.main`
  background-color: #660000;
`;

function App() {
  return (
    <main>
      <h1>Please Fill Out The Form Below</h1>
      <h2>This Will Be How We Address Your Invitations!</h2>
      <p>
        Please use your Mailing Address and Names you'd like them addressed to.
      </p>
      <br />
      <input type="text" name="name" placeholder="Your Name" />
      <input type="text" name="address" placeholder="Your Street Address" />
      <input type="text" name="city" placeholder="Your City" />
      <input type="text" name="state" placeholder="Your State" />
      <input type="text" name="zip" placeholder="Your Zip Code" />
      <br></br>
      <button type="submit">Submit Your Address</button>
    </main>
  );
}

export default App;
