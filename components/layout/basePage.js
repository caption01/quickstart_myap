import React, { Component } from "react";
import Link from "next/link";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

class BasePage extends Component {
  render() {
    const { children, index } = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={index}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link href="/index">Form</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/list">List</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="paddingTop" style={{ padding: "50px 50px" }}>
          <div
            style={{
              background: "#fff",
              padding: "24px 24px",
              minHeight: "50vw"
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    );
  }
}

export default BasePage;
