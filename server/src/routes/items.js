import { Router } from 'express';
import {
  getAllItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} from '../controllers/itemController.js';

const router = Router();

// TODO: wire up the routes described in README.md section 3.

router.get('/', getAllItems);       // GET    /api/items       (supports ?status=&category= filtering, section 4)
router.get('/:id', getItem);        // GET    /api/items/:id
router.post('/', createItem);       // POST   /api/items
router.patch('/:id', updateItem);   // PATCH  /api/items/:id
router.delete('/:id', deleteItem);  // DELETE /api/items/:id


export default router;
