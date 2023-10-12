const jwt = require("jsonwebtoken");
require("dotenv").config

const verifyJWT = (req, res) => {
    const authHeader = req.header['authorization']
    if(!authHeader) return res.sendStatus(401)
    console.log(authHeader);
    const token = authHeader.split(" ")[1]
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,(err, decode) => {
            if(err) return res.sendStatus(403) // invalid token
            req.user = decode.username
            next()
        }
    )
}

module.exports  = verifyJWT