import React, { Children } from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';

class BasePage extends React.Component {


    render(){

        const { Header, Content } = Layout;

        const { children } = this.props

        return(
            <div>
                <Layout className="layout">
                    <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Form</Menu.Item>
                        <Menu.Item key="2">List</Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '50px 50px' }}>
                        <div style={{ background: '#fff', padding: '24px 24px', minHeight: '50vw' }}>
                            { children }
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default BasePage