import React from 'react'
import { Row, Col} from 'antd';
import Product from './Product'
function Products() {
    return (
        <>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify="space-around">
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
                    <Product />
                </Col>
            </Row>
        </>
    )
}

export default Products
