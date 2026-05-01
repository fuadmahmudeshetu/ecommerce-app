import jwt from 'jsonwebtoken';

const authUser = async (req, res , next) => {
    const { token } = req.headers;

    if (!token) {
       return res.status(401).json({
        success: false,
        message: "Not authorized, login again"
       }) 
    }

    try {
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        

    } catch (error) {
        
    }
}