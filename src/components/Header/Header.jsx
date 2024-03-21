import React from "react";
import "./header.css";

import { nav } from "../../assets/data/data";
import logo from "../../assets/images/Blog.png";
import { Link } from "react-router-dom";
import User from "./User";

const Header = () => {
  window.addEventListener("scroll", function(){
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <Link to="/" className="logo">
            <img src={logo} alt='logo' width="100px" />
          </Link>
          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>

      <section>
        
      </section>
    </>
  );
};

export default Header;
