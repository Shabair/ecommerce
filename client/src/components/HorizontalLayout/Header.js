import { Layout, Menu, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function TopHeader() {
    return (
        <Header className="header">
            <div className="logo" >Logo</div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Shop</Menu.Item>
                <Menu.Item key="3">Contact</Menu.Item>
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
