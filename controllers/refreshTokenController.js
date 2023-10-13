const usersDB = {
    users: require("../model/users.json"),
    setUsers: function (data) { this.users = data }
};

const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = (req, res) => {
    const cookie = req.cookie

    if(!cookies?.jwt) return res.sendStatus(401)

    const refreshToken = cookie.jwt

    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken)
    if(!foundUser) return res.sendStatus(401) // Fobidden
}