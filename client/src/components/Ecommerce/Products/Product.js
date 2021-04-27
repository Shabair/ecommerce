import { Card} from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';

function Product() {
    const { Meta } = Card;
    return (
        <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}

            actions={[
                <a href="#"><ShoppingCartOutlined key="cart" /></a>,
                <a href="#"><EyeOutlined key="view" /></a>
            ]}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )
}

export default Product
