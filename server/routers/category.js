import express from 'express';
import category from '../../controller/categoryController';

const router = express.Router();

router.get('/api/category', category.getAll);
router.get('/api/category/:id', category.getOne);
router.put('/api/category/:id', category.updateCategory);
router.delete('/api/category/:id', category.deleteCategory);

router.post('/api/category', category.addCategory);

module.exports = router;



