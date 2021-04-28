import { Layout, Menu } from 'antd';
import { UploadOutlined, DashboardOutlined, ShoppingOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

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
            <div className="logo" style={{padding: "21px 47px"}}>logo</div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                        Dashboard
                                </Menu.Item>
                    <Menu.Item key="products" icon={<ShoppingOutlined />}>
                        Products
                                </Menu.Item>
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
