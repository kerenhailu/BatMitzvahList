require('dotenv').config();
// require('./db/index');
const express = require('express');
const app = express();
// const port = process.env.PORT;
// const cors = require('cors');
// const path=require('path');

// app.use(cors());
// app.use(express.json());

// const usersRouter = require('./Routes/user-router');

// app.use('/users', usersRouter);



app.listen(process.env.PORT||4002);
app.get('/',(req,res)=>res.send('server online'));
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     })
// }
console.log(process.env.PORT);

