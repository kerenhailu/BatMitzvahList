require('dotenv').config();
const express = require('express');
require('./DB/index');
const usersRouter = require('./Routes/user-router');
const app = express();
// const port = process.env.PORT;
const cors = require('cors');
const path=require('path');

app.use(cors());
app.use(express.json());


app.use('/users', usersRouter);



app.listen(process.env.PORT);
app.get('/',(req,res)=>res.send('server online'));

app.use('/user',usersRouter);
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    })
}
// console.log(process.env.PORT);

