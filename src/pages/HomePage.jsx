import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [names, setNames] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <h1>This is a home page</h1>
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
          </label>
          <br />
          <br />
          <label>
            Enter Age :
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <br />
          <button onClick={() => navigate("About")}>Next Page</button>
        </form>
      </div>
    </>
  );
}
