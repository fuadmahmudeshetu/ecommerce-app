import express from 'express'
import { addToCart, updateCart, getUserCart } from '../controllers/cart.controller.js';
const cartRouter = express.Router();

cartRouter.post('/add', addToCart);
cartRouter.post('/update', updateCart);
cartRouter.get('/user', getUserCart);

export default cartRouter;