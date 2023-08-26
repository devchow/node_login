const express = require('express');
const app = express();

const users = [
];

app.get('/users', (req, res) => {
    res.json([users]);
});
app.listen(3000, () => console.log('Server running on port 3000'));