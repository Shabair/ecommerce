import express from 'express';

import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
//security
import helmet from 'helmet'
import hsts from 'hsts'
/**
 * Import Routers
 */
import postRouter from './routers/posts.js'
import aboutRouter from './routers/about.js'
import authRouter from './routers/auth.js'
import productsRouter from './routers/admin/products.js'

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(morgan('dev'));
dotenv.config();

/**
 * All Security 
 */
const sixtyDaysInSeconds = 5184000
app.use(hsts({
    maxAge: sixtyDaysInSeconds,
    includeSubDomains: false
}))
/** 
* This will disable the X-Powered-By header
* and help prevent attackers from launching targeted attacks for apps running express
**/
5
app.disable('x-powered-by');

/**
 * Helmet disables X-Powered-By header and also sets other secure HTTP headers
 */

app.use(helmet());

/**
 * DB Connection and after successful connection start Server
 */

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

})
    .then(() => {
        console.log("Connection Succeefull.....");
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`Server is running at port http://localhost:${port}`)
        });
    })
    .catch((error) => {
        console.log("Connection failed...!")
        console.log(error.message);
    });




/**
 * All Routers
 */

//post Router
app.use('/posts', postRouter);

//sign-in Router
app.use('/', authRouter);

//single about
app.use('/about', aboutRouter);

//product
app.use('/products', productsRouter)

//single Home
app.get('/', (req, res) => {
    res.send('In The Home Page');
});


//single page contact
app.get('/contact', (req, res) => {
    res.send('In The Contact Page');
});