exports.checkAccountPayload = (req, res, next) => {
  console.log('checkAccountPayload middleware')
  next()

}

exports.checkAccountNameUnique = (req, res, next) => {
  next(console.log('checkAccountNameUnique middleware'))

}

exports.checkAccountId = (req, res, next) => {
  next(console.log('checkAccountId middleware'))

}
