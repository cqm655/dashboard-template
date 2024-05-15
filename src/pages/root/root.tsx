import { Outlet, useNavigation } from "react-router-dom";
import style from "./root.module.css";
import NavBar from "../../components/nav-bar/nav-bar";
import FooterElement from "../../components/footer/footer";
import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from "../../components/sidebar/sidebar";

const Root = () => {
  return (
    <Layout
      style={{
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <NavBar />
      <Layout
        style={{
          padding: "10px 10px 10px 0px",
        }}
      >
        <Sidebar />
        <Content className={style.content}>
          <Outlet />
        </Content>
      </Layout>
      <FooterElement />
    </Layout>
  );
};

export default Root;
