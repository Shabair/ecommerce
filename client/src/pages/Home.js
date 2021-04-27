import { Layout, Menu, Row, Col, Card, Avatar, Badge } from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import Carousel from '../components/Common/Carousel/Carousel'
import Product from '../components/Ecommerce/Products/Product'
const { Header, Content} = Layout;

function Home() {
    const { Meta } = Card;
    const { Header, Content, Footer } = Layout;
    return (
        <>
            <Carousel />
            <div className="content-container">
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },{ xs: 8, sm: 16, md: 24, lg: 32 }]} justify="space-around">
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                    <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                        <Product />
                    </Col>
                </Row>
            </div>
            
        </>
    )
}

export default Home
