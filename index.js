const express = require('express')
const app = express();
const port = 3000;

//Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//Define a route for a get req
app.get('/about', (req, res) => {
    res.send('ABout Us');
});

//Middle to parse json bodies
app.use(express.json());

//Define a route for a post req
app.post('/submit',(req, res) => {  
    const data = req.body;
    res.send(`REceived: ${JSON.stringify(data)}`);
});

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});