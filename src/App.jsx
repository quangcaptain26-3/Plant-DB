import { Layout, Button } from "antd";
import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import "./App.css";
import CustomHeader from "./components/Header";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
import { Flex } from "antd";

const { Sider, Header, Content } = Layout;

const App = () => {
  const [collapsed, setcollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />

        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setcollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
