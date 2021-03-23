const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['Asad', 'Moin', 'Sabed', 'Suusmita', 'Sohana', 'Sabana'];

// const rootCall = (req, res) => res.send('Thank you very much!');
app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
});

app.get('/fruits/banana', (req, res) =>{
    res.send({fruit: "banana", quantity: 1000, price: 10000})
});

app.get('/users/:id', (req, res) => {
    const id =  req.params.id;
    const name = users[id];
    res.send({id, name});
}); 


//post
app.post('/addUser', (req, res) => {
    console.log("data received", req.body);
    const user = req.body;
    user.id = 55;
    res.send(user);
})



app.listen(3001, () => console.log('Listening to port 3001!'));