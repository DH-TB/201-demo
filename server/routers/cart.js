import express from 'express';
import cart from '../../controller/cartController';

const router = express.Router();

router.get('/api/carts', cart.getAll);
router.get('/api/carts/:id', cart.getOne);
router.post('/api/carts', cart.addCart);

module.exports = router;



