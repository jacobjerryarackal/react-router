import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactPage() {
  const [names, setNames] = useState("");
  const [numbers, setNumbers] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  function handlesubmit() {
    alert("Pattiche, Onnum ellalo hehehehehee");
  }

  return (
    <>
      <h1>This is a Contact page</h1>
      <div>
        <form>
          <label>
            {" "}
            Enter your name:
            <input
              type="text"
              value={names}
              onChange={(e) => setNames(e.target.value)}
            />
          </label>{" "}
          <br />
          <br />
          <label>
            {" "}
            Enter your number:
            <input
              type="number"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
            />
          </label>{" "}
          <br />
          <br />
          <label>
            {" "}
            Enter your Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>{" "}
          <br />
          <br />
          <button onClick={handlesubmit}>Submit</button>
          <br />
          <br />
          <button onClick={() => navigate("/Products")}>Next Page</button>
          <br />
          <br />
          <button onClick={() => navigate("/About")}>Previous Page</button>
          <br />
          <br />
          <br />
          <br />
          <button onClick={() => navigate("/")}>Back to Home Page</button>
        </form>
      </div>
    </>
  );
}
