import React from "react";
import "../styles/Home.css";
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jessica</h2>
        <div className="prompt">
          <p>A senior student majoring in Computer Science</p>
        </div>
        <h2> Hi, My Name is Yutong</h2>
        <div className="prompt">
          <p>A senior student majoring in Computer Science + Math</p>
        </div>
      </div>
    </div>
  );
}

export default Home;