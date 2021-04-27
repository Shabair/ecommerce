import { Carousel} from 'antd';

function HomeCarousel() {
    return (
        <Carousel autoplay>
            <div>
                <h3 className="contentStyle">1</h3>
            </div>
            <div>
                <h3 className="contentStyle">2</h3>
            </div>
            <div>
                <h3 className="contentStyle">3</h3>
            </div>
            <div>
                <h3 className="contentStyle">4</h3>
            </div>
        </Carousel>
    )
}

export default HomeCarousel
