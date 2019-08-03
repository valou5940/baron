const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

    const authHeader = req.get('Authorization');
    console.log(`authHeader = ${authHeader}`)
    if(!authHeader){
        console.log(`authHeader is false`)
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1]; //Bearer token
    console.log(`token = ${token}`)
    if(!token || token === ''){
        console.log(`token is empty`)
        req.isAuth = false;
        return next();

    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'somesupersecretkey');
        console.log(`decodedToken = ${decodedToken}`)
    }catch (e) {
        console.log(`verify failed 1`)
        req.isAuth = false;
        return next();
    }
    if(!decodedToken){
        console.log(`verify failed 2 `)
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    return next();
};