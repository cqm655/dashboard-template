import { Layout, Mentions, Menu } from "antd";

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <>
      <Sider>
        <Menu
          mode="inline"
          theme="light"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
          items={[
            {
              key: "1",
              label: "nav 1",
            },
            {
              key: "2",
              label: "nav 2",
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
