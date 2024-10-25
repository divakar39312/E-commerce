import React from "react";
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">E-commerce App</h1>
      <nav>
        <ul className="navList">
          <li>
            <a className="navListItem" href="">Home</a>
          </li>
          <li>
            <a className="navListItem" href="">Cart</a>
          </li>
          <li>
            <a className="navListItem" href="">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// const styles = {
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "20px",
//     backgroundColor: "#333",
//     color: "#fff",
//   },
//   title: {
//     margin: 0,
//   },
// };

export default Header;
