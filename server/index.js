import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/users.js';

const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is stack overflow clone API")
})

app.use('/user', userRoutes)
const PORT = process.env.PORT || 5000

// const CONNECTION_URI = "mongodb+srv://pujatiwari1502:puja123@stackoverflowclone.35upztx.mongodb.net/stackoverflow";
const CONNECTION_URI = "mongodb+srv://pujatiwari1502:puja123@stackoverflowclone.35upztx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=stackOverflowClone";

mongoose.connect( CONNECTION_URI)
.then(() => app.listen(PORT, () => { console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))



