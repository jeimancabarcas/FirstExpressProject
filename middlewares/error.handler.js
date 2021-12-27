function logErrors(err, req, res, next) {
  console.log(err);
  console.error(err);
  next(err)
}

function handleBoomError(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload)
  }
  res.status(500).json({message: err.message})
}

module.exports = { logErrors, handleBoomError }
