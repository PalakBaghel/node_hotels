const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
  //first chk request headers has authorization or not
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ error: "Token not found" });

  //extract the jwt token from the request headers
  const token = req.headers.authorization.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized token' });
  try {
    //verify the jwt token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //decoded payload

    //attach user information to the request object
    req.user = decoded;
    next(); //vapas server m bhejdo
  }
  catch (err) {
    console.log(err);
    res.status(401).json({ error: 'Invalid token' });

  }
}

//function to generate jwt token
const generateToken = (userData) => {
  //generate a new jwt token using user data
  //payload is generally user data
  return jwt.sign(userData, process.env.JWT_SECRET);

  //adding expiary time
 // return jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: 30 });
}




module.exports = { jwtAuthMiddleware, generateToken }