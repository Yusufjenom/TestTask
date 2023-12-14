const ErrorMiddleware = (err, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal server error'

    //WRONG MONGODB ID
  if(err.name === 'CastError'){
    const message = `Resource not found. Invalid: ${err.path}`;
    err = {message, statusCode: 400};
  }

  
  res.status(err.statusCode).json({
    success: false,
    message: err.message
  })
}