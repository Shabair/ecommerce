import Carousel from '../components/Common/Carousel/Carousel'
import Products from '../components/Ecommerce/Products/Products'


function Home() {

    return (
        <>
            <Carousel />
            <div className="content-container">
                <Products />
            </div>
            
        </>
    )
}

export default Home
