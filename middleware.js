const jwt = require('jsonwebtoken');

const authPage = (permissions)=>{
    return (req,res,next)=> {
        const userRole = req.body.role
        if (permissions.includes(userRole)){
            next()
        } else {
            return res.status(400).json("No permission")
        }
    }
    };


// function authRole(role) {
//     return (req,res, next) => {
//         if (req.user.role !== role) {
//             res.status (401)
//             return res.send('Not allowed')
//         }
//         next()
//     }
// }

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};
