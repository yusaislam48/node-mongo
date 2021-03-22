const express = require('express');

const app = express();

// const rootCall = (req, res) => res.send('Thank you very much!');
app.get('/', (req, res) => {
    res.send('I know how to open node.....YAY');
})

app.listen(3001, () => console.log('Listening to port 3001!'));