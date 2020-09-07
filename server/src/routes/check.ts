import { Router, Request, Response } from 'express';

const router = Router();

// Get all users
router.get('/', [], (req: Request, res: Response) =>
  res.status(200).send('ON AIR!!'),
);

export default router;
