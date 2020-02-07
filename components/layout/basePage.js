import React, { Children } from "react";
import Link from "next/link";

import { Layout, Menu, Breadcrumb } from "antd";

class BasePage extends React.Component {
  render() {
    const { Header, Content } = Layout;

    const { children, index } = this.props;

    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={index}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link href="/index">
                  <a>Form</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link href="/list">
                  <a>List</a>
                </Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "50px 50px" }}>
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
      </div>
    );
  }
}

export default BasePage;
