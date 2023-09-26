import React from "react";
import CarLogo from "../media/car-logo.webp";
import { useRef } from "react";

const CarDealership = () => {
  const activate = useRef<HTMLDivElement>(null);
  const ulActivate = useRef<HTMLUListElement>(null);

  const activateHamburgerMenu = () => {
    activate.current?.classList.toggle("active");
    ulActivate.current?.classList.toggle("active");
  };
  return (
    <div className="container">
      <header>
        <nav>
          <span>Your Logo</span>
          <ul ref={ulActivate}>
            <li>About Us</li>
            <li>Browse</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <div
            className="hamburger"
            ref={activate}
            onClick={activateHamburgerMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <div className="content">
        <h1 className="title">Vintage car dealership</h1>
        <h2 className="slogan">Your slogan goes here...</h2>
        <div className="promotions">
          <article>
            <h3>Promotion article 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              velit sit amet odio bibendum suscipit.
            </p>
          </article>
          <article>
            <h3>Promotion article 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              velit sit amet odio bibendum suscipit.
            </p>
          </article>
          <article>
            <h3>Promotion article 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              velit sit amet odio bibendum suscipit.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CarDealership;
