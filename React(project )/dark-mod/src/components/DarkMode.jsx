
import { useState } from "react";
import iphone from "../assets/th-removebg-preview (1).png"
import iphone1 from "../assets/th__4_-removebg-preview (1).png"
import iphone2 from "../assets/th__2_-removebg-preview.png"
import iphone3 from "../assets/th__1_-removebg-preview.png"



function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <h1>Dark Mode App</h1>
      <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

function Section() {
  return (
    <section className="section" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", flexWrap: "wrap", height: "500px" }}>
      <h2 style={{ textAlign: "center" }}>Section Title</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        <div>
          <img src={iphone} alt="" height={"200px"} />
          <p style={{ textAlign: "center" }}>iPhone 13</p>
        </div>
        <div>
          <img src={iphone1} alt="" height={"200px"} />
          <p style={{ textAlign: "center" }}>iPhone 13 Pro Max</p>
        </div>
        <div>
          <img src={iphone2} alt="" height={"200px"} />
          <p style={{ textAlign: "center" }}>iPhone 12 Pro Max</p>
        </div>
        <div>
          <img src={iphone3} alt="" height={"200px"} />
          <p style={{ textAlign: "center" }}>iPhone 16</p>
        </div>

      </div>
    </section>
  );
}

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <Section />
        <main className="main">
          <p>iphone details</p>
        </main>
        <footer className="footer">
          <p>Dark Mode.</p>
        </footer>
      </div>
    </div>
  );
}


