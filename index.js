const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello! From Node server');
});


const users = [
    { id: 0, name: 'Ahnaf', email: 'ahnaf@gmail.com', phone: '017 000 000 01' },
    { id: 1, name: 'Ruzan', email: 'ruzan@gmail.com', phone: '017 000 000 02' },
    { id: 2, name: 'Rafat', email: 'rafat@gmail.com', phone: '017 000 000 03' },
    { id: 3, name: 'Ashique', email: 'adhique@gmail.com', phone: '017 000 000 04' },
    { id: 4, name: 'Tausif', email: 'tausif@gmail.com', phone: '017 000 000 05' },
    { id: 5, name: 'Madani', email: 'madani@gmail.com', phone: '017 000 000 06' }
]

// Query parameter
app.get('/users', (req, res) => {
    // users?search=abc
    // users?search=abc&&order=asc
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send('inside p
    res.json(newUser)
})

// Dynamic api
app.get('/users/:id', (req, res) => {
    // console.log(req.params.id);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});


app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'jackfruit', 'grape']);
});

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('I do not like Fazli')
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
