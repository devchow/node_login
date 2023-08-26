const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [
];

app.get('/users', (req, res) => {
    res.json([users]);
});

app.post('/users', async (req, res) => {

    try{
        const salt = await bcrypt.genSalt();

        const hashedPassword = await bcrypt.hash(req.body.pass, salt);

        const user = {name: req.body.name, pass: hashedPassword};

        users.push(user);
    
        res.status(201).json({
            message: 'User was added successfully!',
        });
    } catch {
        res.status(500).send("Error");
    }

});

app.listen(3000, () => console.log('Server running on port 3000'));

