import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Row, Col, Avatar, Image, collapsed } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    CloseOutlined,
    FundOutlined,
    FormOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import Slider from '@ant-design/react-slick';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function MasterPage({ ...props }) {

    const history = useHistory()
    const [click, setClick] = useState("")


    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider style={{ paddingTop: "90px" }}>
                    <Menu theme="dark" defaultSelectedKeys={['']} mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => {
                            setClick("Home");
                            history.push({ pathname: "/WebApp/HomePage" });
                        }}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />} onClick={() => {
                            setClick("Information");
                            history.push({ pathname: "/WebApp/DashBoard" });
                        }}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="3" icon={<DesktopOutlined />} onClick={() => {
                            setClick("Option 2");
                            history.push({ pathname: "/WebApp/Information" });
                        }}>
                            Information
                        </Menu.Item>
                        <SubMenu key="4" icon={<UserOutlined />} title="User">
                            <Menu.Item key="5">Tom</Menu.Item>
                            <Menu.Item key="6">Bill</Menu.Item>
                            <Menu.Item key="7">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="8" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="9">Team 1</Menu.Item>
                            <Menu.Item key="10">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="11" icon={<FormOutlined />} onClick={() => {
                            setClick("Contact");
                            history.push({ pathname: "/WebApp/Contact" });
                        }}>
                            Contact Me
                        </Menu.Item>
                        <Menu.Item danger="true" key="12" icon={<CloseOutlined />} onClick={() => {
                            setClick("Exit");
                            history.push({ pathname: "/" });
                        }}>
                            Exit
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{
                        minHeight: '5px',
                        padding: 0,
                        color: 'white',
                        fontFamily: 'Courier',
                        fontSize: '20px'
                    }} >
                        [ <FundOutlined /> Teachin Eaksuverapong  ]
                    </Header>
                    <Content style={{ margin: '25px', padding:"20px" , backgroundColor: '#E7EEEF' }}>
                        <Breadcrumb style={{ margin: '5px', color:"gray" }}>
                            <Breadcrumb.Item>Teachin-App</Breadcrumb.Item>
                            <Breadcrumb.Item>{click}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding:"0 0 0 0", minHeight:"300px" }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center', backgroundColor: '', color: '' }}>© Master App ©2021 Created by Teachin Eak ©</Footer>
                </Layout>
            </Layout>

        </>
    )
}
