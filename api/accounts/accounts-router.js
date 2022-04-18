const router = require('express').Router()
const middleware = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async(req, res, next) => {
  try{
    const accounts = await Account.getAll()
    res.json(accounts)
  }catch (err){
    next(err)
  }
})

router.get('/:id',  middleware.checkAccountId, async (req, res, next) => {
 res.json(req.account)
})

router.post('/', 
middleware.checkAccountPayload, 
middleware.checkAccountNameUnique, 
(req, res, next) => {
    try{
    res.json('post accounts')
  }catch (err){
    next(err)
  }
})

router.put('/:id', 
middleware.checkAccountId, 
middleware.checkAccountPayload,
(req, res, next) => {
  try{
    res.json('update accounts at a given id')
  }catch (err){
    next(err)
  }
});

router.delete('/:id', middleware.checkAccountId, (req, res, next) => {
   try{
    res.json('delete accounts at a given id')
  }catch (err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({ message: err.message })
})

module.exports = router;
