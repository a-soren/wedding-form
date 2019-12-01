import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Please Fill Out The Form Below</h1>
      <h2>This Will Be How We Address Your Invitations!</h2>
      <p>
        Please use your Mailing Address and Name's you'd like them addressed to.
      </p>
      <br />
      <input type="text" name="name" placeholder="Your Name" />
      <input type="text" name="address" placeholder="Your Street Address" />
      <input type="text" name="city" placeholder="Your City" />
      <input type="text" name="state" placeholder="Your State" />
      <input type="text" name="zip" placeholder="Your Zip Code" />

      <button type="submit">Submit Your Address</button>
    </main>
  );
}

export default App;
