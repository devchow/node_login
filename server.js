const express = require('express');
const app = express();

const users = [
];

app.get('/users', (req, res) => {
    res.json([users]);
});

app.post('/users', (req, res) => {

    const user = {name: req.body.name, pass: req.body.pass};

    users.push(user);

    res.status(201).json({
        message: 'Handling POST requests to /users',
    });

    // res.status(201).send('User added')
});

app.listen(3000, () => console.log('Server running on port 3000'));

