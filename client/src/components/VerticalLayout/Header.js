import { Layout, Menu, Badge } from 'antd';
import React, {useState} from 'react'
import { useSelector } from 'react-redux'

import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'
const { Header} = Layout;

function TopHeader() {
    const auth = useSelector((state)=>state.auth);

    const [current, setCurrent] = useState('dashboard');
    const menuSelectHandler = (e) => {
        setCurrent(e.key);
    }

    return (
        <Header className="header" >
            <div className="logo" >Admin</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[current]}  onClick={menuSelectHandler} selectedKeys={[current]} >
                <Menu.Item key="dashboard"><NavLink exact to="/">Dashboard</NavLink></Menu.Item>
                <Menu.Item key="products"><NavLink exact to="/products">Products</NavLink></Menu.Item>
                
                {
                    (!auth.user.role)?
                    <>
                    <Menu.Item key="login"><NavLink exact to="/login">Login</NavLink></Menu.Item>
                    </>:

                    <Menu.Item key="logout"><NavLink exact to="/logout">Logout</NavLink></Menu.Item>
                }
                
                <Menu.Item key="4">
                    <Badge count={5}>
                        <a href="#" className="head-example" ><ShoppingCartOutlined /></a>
                    </Badge>
                </Menu.Item>
                
            </Menu>
        </Header>
    )
}

export default TopHeader
