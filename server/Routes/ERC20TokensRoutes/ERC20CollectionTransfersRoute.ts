import express from 'express';
import { ERC20CollectionTransfersController } from '../../Controller/ERC20Tokens/ERC20CollectionTransfersController';

const router = express.Router();

// Add routes to be passed to node backend server
router.post("/erc20-collection-transfers", ERC20CollectionTransfersController);

module.exports = router;