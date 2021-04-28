import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';


function BasicBreadcrumbs() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">
                <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
                <UserOutlined />
                <span>Shop</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}


export default BasicBreadcrumbs;