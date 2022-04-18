const router = require('express').Router()

router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'good job! you found me!'})
})

router.get('/:id', (req, res, next) => {
  res.status(200).json({ message: 'good job! you found me!'})
})

router.post('/', (req, res, next) => {
  res.status(200).json({ message: 'good job! you found me!'})
})

router.put('/:id', (req, res, next) => {
  res.status(200).json({ message: 'good job! you found me!'})
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({ message: 'good job! you found me!'})
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(200).json({ message: 'good job! you found me!'})
})

module.exports = router;
