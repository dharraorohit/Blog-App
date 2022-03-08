import express from 'express';

import { getArticles, addArticle, removeArticle,changeStatusArticle } from '../controllers/articles';

const router=express.Router();

router.get('/',getArticles);
router.post('/',addArticle);
router.delete('/:id',removeArticle);
router.patch('/:id',changeStatusArticle);

export default router;