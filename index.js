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

app.use ((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use ((err, req, res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const items = ['Apple', 'Banana', 'Orange'];

app.get('/items', (req,res) => {
    res.json(items);
});
 
app.post('/items', (req,res) => {
    const newItem = req.body.item;
    items.push(newItem);
    res.json(items);
});