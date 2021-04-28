import { Layout, Menu, Badge } from 'antd';
import React, {useState} from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { NavLink,Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;

function TopHeader() {
    const [current, setCurrent] = useState('home');
    const menuSelectHandler = (e) => {
        setCurrent(e.key);
    }

    return (
        <Header className="header" >
            <div className="logo" >Logo</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}  onClick={menuSelectHandler} selectedKeys={[current]} >
                <Menu.Item key="home"><Link exact to="/">Home</Link></Menu.Item>
                <Menu.Item key="shop"><Link exact to="/shop">Shop</Link></Menu.Item>
                <Menu.Item key="signup"><Link exact to="/signup">Sign Up</Link></Menu.Item>
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
