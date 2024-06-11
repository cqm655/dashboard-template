import React, { useContext } from "react";
import { Button, Col, Layout } from "antd";
import styles from "./nav-bar.module.css";
import Search from "antd/es/input/Search";
import { AuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const NavBar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/login");
  };
  return (
    <Header className={styles.header}>
      <Col className={styles.leftSection} xs={2} sm={4} md={6} lg={8} xl={10}>
        <Search
          style={{ width: "fit-content" }}
          placeholder="Search..."
          loading={false}
        />
      </Col>
      <Col className={styles.middleSection} xl={4}>
        Col
      </Col>
      <Col className={styles.righSection} xs={2} sm={4} md={6} lg={8} xl={10}>
        <Button danger type="primary" onClick={handleClick}>
          Exit
        </Button>
      </Col>
    </Header>
  );
};

export default NavBar;
