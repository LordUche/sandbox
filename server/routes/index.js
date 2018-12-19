import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).json('Welcome to iReporter');
});

router.all('*', (req, res) => {
  res.status(404);
  throw new Error('Page not found');
});

router.use((err, req, res, next) => {
  res.json({ status: res.statusCode, message: err.message });
});

export default router;
