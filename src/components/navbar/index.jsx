import styles from "./navbar.module.css";
import flowNBA from "../../assets/flow-nba.jpg";
import CartWidget from "../CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Menu from "../Menu";

const NavBar = () => {
  let activeStyle = {
    fontWeight: "bold",
  };
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  };
  return (
    <>
      <NavContainer>
        <div className={styles.burger}>
          <Menu handleClick={handleClick} />
        </div>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={flowNBA} alt="storeName" />
          </NavLink>
        </div>
        <div className={`navItems ${clicked ? "active" : ""}`}>
          <NavLink to="/category/east-side" style={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={handleClick}>
            <p className={styles.eastSide}>East Side</p>
          </NavLink>
          <NavLink to="/category/west-side" style={({ isActive }) => (isActive ? activeStyle : undefined)} onClick={handleClick}>
            <p className={styles.westSide}>West Side</p>
          </NavLink>
        </div>
        <div className={styles.cartWidget}>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </div>
      </NavContainer>
    </>
  )
};

export default NavBar;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1.2em;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .navItems{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.navItems p{
    color: white;
    margin: 0 1em;
}
.navItems p:hover{
    transform: scale(1.2, 1.2);
}
@media (max-width: 768px){
  .navItems{
      position: absolute;
      margin: 0 auto;
      top: -700px;
      left: -2000px;
      text-align: center;
      transition: all .5s ease;
  }
  .navItems.active{
      width: 50%;
      display: block;
      top: 110%;
      left: 0;
      background-color: black;
  }
}
`