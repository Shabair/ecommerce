import { Carousel} from 'antd';

function PageBanner({pageTitle}) {
    return (
        <Carousel autoplay>
            <div>
                <h3 className="contentStyle">{pageTitle}</h3>
            </div>
        </Carousel>
    )
}

export default PageBanner
