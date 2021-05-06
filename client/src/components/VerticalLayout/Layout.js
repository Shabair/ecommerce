import React from 'react'
import Helmet from "react-helmet";
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Layout } from 'antd';

const { Content} = Layout;
const MainLayout = ({ pageTitle, children }) => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{pageTitle}</title>
                {/* <link rel="apple-touch-icon" sizes="180x180" href={AppleTouch} /> */}
                {/* <link rel="icon" type="image/png" sizes="32x32" href={Fevicon32} /> */}
                {/* <link rel="icon" type="image/png" sizes="16x16" href={Fevicon16} /> */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Layout>
                <Sidebar />
                <Layout>
                    <Header />

                    <Content style={{ padding: "10px 50px" }}>
                        {children}
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
            {/* <MobileNav /> */}
            {/* <SearchPopup /> */}
        </>
    )
}

export default MainLayout
