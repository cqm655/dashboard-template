import React from "react";
import { Layout } from "antd";
import styles from "./nav-bar.module.css";

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
    </Header>
  );
};

export default NavBar;
