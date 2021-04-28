
import { Layout, Row, Col } from 'antd';
import Sidebar from '../Common/Sidebar/Sidebar'
import PageBanner from '../Common/PageBanner/PageBanner'
import Breadcrumb from '../Common/Breadcrumb/Breadcrumb'

const { Content } = Layout;
function ContentWithSidebar({ children }) {
    return (
        <>
            <PageBanner pageTitle={'Shop'} />
            <Layout className="content-layout">
                <Breadcrumb />
                <Content style={{padding:"10px 50px"}}>
                    <Row>
                        <Col span={18}>
                            {children}
                        </Col>
                        <Col span={6}>
                            <Sidebar />
                        </Col>
                    </Row>

                </Content>
            </Layout>
        </>
    )
}

export default ContentWithSidebar
