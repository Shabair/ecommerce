import { Layout, Menu } from 'antd';
import { UploadOutlined, DashboardOutlined, ShoppingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar() {
    return (
        <>
            <Sider breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}

            >
                <div className="logo" style={{ padding: "21px 47px" }}>logo</div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                        <NavLink exact to="/admin">Dashboard</NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<ShoppingOutlined />} title="Products">
                        <Menu.Item key="products-list"><NavLink exact to="/products">Products List</NavLink></Menu.Item>
                        <Menu.Item key="add-product"><NavLink exact to="/product/add">Add Products</NavLink></Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                                </Menu.Item>
                    <Menu.Item key="4" icon={<DashboardOutlined />}>
                        nav 4
                                </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}

export default Sidebar
