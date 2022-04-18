const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log('checking account payload')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checking unique')
  next()
}

exports.checkAccountId = async(req, res, next) => {
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      next({ status: 404, message: 'sorry, account not found'})
    } else {
      req.account = account
      next()
    }
  }catch(err){
    next(err)
  }
}
