import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../firebase";

const auth = getAuth(app);

function UserSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("User Sign In Successfully!"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container text-bg-danger rounded-5 w-50 p-4 my-4">
        <h1 className="text-center">Sign In</h1>

        <div className="col">
          <label>Enter Your Email </label>
          <input
            type="email"
            required
            placeholder="Enter Your Email Here"
            className="form-control my-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col">
          <label>Enter Your Password </label>
          <input
            type="password"
            required
            placeholder="Enter Your Password Here"
            className="form-control my-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-dark" onClick={signInUser}>
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;