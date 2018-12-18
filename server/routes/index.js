import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).json('Welcome to iReporter');
});

router.all('*', (req, res) => {
  res.status(404).json('Page not found');
});

router.use((err, req, res, next) => {
  res.status(500).json({ status: 500, message: err.message });
});

export default router;
