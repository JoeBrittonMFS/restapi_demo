require('./db/connection.js');
const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes/user.js');
const { postRouter } = require('./routes/posts.js')

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(cors())



app.get("/health", (req, res) => {
    res.status(200).send( { message: "API is working" } );
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});