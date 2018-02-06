import express from 'express';
import item from '../../controller/itemController';

const router = express.Router();

router.get('/api/items', item.getAll);
router.get('/api/items/:id', item.getOne);
router.post('/api/items', item.addItem);
router.put('/api/items/:id', item.updateItem);
router.delete('/api/items/:id', item.deleteItem);

module.exports = router;



