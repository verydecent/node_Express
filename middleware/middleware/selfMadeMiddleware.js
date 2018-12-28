var exports = module.exports = {}

exports.methodURL = function(req, res, next) {
  console.group(`${req.method}: ${req.url}`)
  next()
}

exports.apiKeyVerifier = function(req, res,next) {
  if(req.query.api_key) {
    next()
  } else {
    res.status(401).send({msg: "Not Authorized"})
  }
}