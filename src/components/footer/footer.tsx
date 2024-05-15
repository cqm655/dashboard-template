import React from "react";
import { Layout } from "antd";
import styles from "./footer.module.css";

const { Footer } = Layout;
const FooterElement = () => {
  return (
    <Footer className={styles.footer}>
      Ant Design ©{new Date().getFullYear()} Created by Balan Iurie
    </Footer>
  );
};
export default FooterElement;
