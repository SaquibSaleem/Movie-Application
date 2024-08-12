const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const users = [
    { username: 'Qazi', email: 'qazi@email.com', password: 'qazi12345' },
    { username: 'hasan', email: 'hasan@email.com', password: 'hasan12345' },
    { username: 'anas', email: 'anas@email.com', password: 'anas12345' },
    { username: 'emad', email: 'emad@email.com', password: 'emad12345' },
]

const JWT_TOKEN_PRIVATE_KEY = 'secretKey123'

const PORT = 3000;
const app = express();

app.use(cors())
app.use(express.json());

app.post('/signup', (req, res) => {
    try {

        const username = req.body.username
        const email = req.body.email
        const password = req.body.password

        if (!username || !email || !password) return res.status(400).json({ status: false, data: null, message: 'inavlid request body' })

        users.push({ username, email, password })

        res.status(200).json({ status: true, data: { username, email, password }, message: 'user added successfully' })

    }
    catch (error) {

        return res.status(400).json({ status: false, data: null, message: 'something went wrong', error })

    }
})

app.post('/login', (req, res) => {
    try {

        const email = req.body.email
        const password = req.body.password

        const user = users.filter(user => user.email == email && user.password === password)[0]

        if (!user || user == false) return res.status(400).json({ status: false, data: null, message: 'user not found' })

        const token = jwt.sign({ data: user }, JWT_TOKEN_PRIVATE_KEY);

        return res.status(200).json({ status: true, data: { ...user, token }, message: 'SignIn Successfully' })

    } catch (error) {

        return res.status(400).json({ status: false, data: null, message: 'something went wrong', error })

    }
})

app.get('/is-auth', async (req, res) => {
    try {

        const token = req.headers?.authorization?.split(' ')[1];

        const decoded = await jwt.verify(token, JWT_TOKEN_PRIVATE_KEY);
        const user = decoded['data']

        return res.status(200).json({ status: true, data: { ...user, token }, message: '' })

    } catch (error) {

        return res.status(400).json({ status: false, data: null, message: 'something went wrong', error })

    }
})

app.listen(PORT, () => console.log('LISTENING TO PORT ' + PORT));