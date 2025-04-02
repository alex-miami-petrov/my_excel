import React from "react";
import s from "./header.module.css";
import Container from "../container/container";
import logo from "../../img/logo.png";

const Header = () => {
  return (
    <section className={s.header}>
      <Container>
        <img src={logo} alt="logo" width="100" height="30" />
      </Container>
    </section>
  );
};

export default Header;
