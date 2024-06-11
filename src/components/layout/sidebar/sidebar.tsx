import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sider style={{ borderRadius: "10px" }}>
        <Menu
          mode="inline"
          theme="light"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0, borderRadius: "8px" }}
          items={[
            {
              key: "1",
              label: "nav 1",
              onClick: () => {
                navigate("users");
              },
            },
            {
              key: "2",
              label: "nav 2",
              onClick: () => {
                console.log("d");
              },
            },
            {
              key: "3",
              label: "nav 3",
            },
          ]}
        />
      </Sider>
    </>
  );
};
export default Sidebar;
