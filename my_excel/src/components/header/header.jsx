import React from "react";
import s from "./header.module.css";
import Container from "../container/container";

const Header = () => {
  return (
    <section className={s.header}>
      <Container></Container>
    </section>
  );
};

export default Header;
