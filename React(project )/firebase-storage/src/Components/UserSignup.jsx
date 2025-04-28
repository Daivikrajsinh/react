import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then(() =>
      alert("User Signup Successfully")
    );
  };

  return (
    <>
      <div className="container text-bg-dark rounded-5 w-50 p-4 my-4">
        <h1 className="text-center">Sign Up</h1>
        <div className="col">
          <label>User Email</label>
          <input
            type="email"
            required
            placeholder="Enter Email Here"
            className="form-control my-3"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label>User Password</label>
          <input
            type="password"
            required
            placeholder="Enter Password Here"
            className="form-control my-3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={signupUser}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignup;