# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

    // useEffect(() => {
        
    //     // axios.get("http://localhost:3000/user")
    //     //     .then((res) => {
    //     //         console.log(res.data);
    //     //         setUserName(res.data.userName ||"");
    //     //         setEmail(res.data.email||"");
    //     //         setPassword(res.data.password||"");
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err);
    //     //     });
    // }, []);


import axios from 'axios';
import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      alert('Please enter both email and password');
      return;
    }

    // Create user object to send in the request
    const userObject = { email, password };

    // Make an API request to login
    axios.post('http://localhost:3001/login', userObject)
      .then((res) => {
        console.log(res.data);
        alert('Login successful');
        // Handle the response from the server (e.g., redirect or store user data)
      })
      .catch((err) => {
        console.log(err);
        alert('Login failed');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;


import axios from 'axios';
import React, { useState } from 'react'

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    const userObject = { email, password };

    axios
      .get("http://localhost:3001/user", userObject ) 
      .then((res) => {
        
        const newUser = res.data.find(
          (user) => user.email === email && user.password === password
        );
        if (newUser) {
          alert("Login Successful");
        } else {
          setError("Invalid email or password. Please try again."); 
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred. Please try again.");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignIn;
