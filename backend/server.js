import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';

//App config
const app = express();
const port = process.env.PORT || 5000;
connectDb();
connectCloudinary



//  middlewares
app.use(express.json());
app.use(cors());

// Api endpoints
app.use('/api/user', userRouter);

app.get('/', (req, res) =>{
    res.send("Api working");
})

app.listen(port, () => {
    console.log('Server Started on port: ' + port)
})