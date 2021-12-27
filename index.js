const express = require('express');
const routerApi = require('./routes')

const { logErrors, handleBoomError } = require('./middlewares/error.handler')
const app = express();
const port = 3000

app.listen(port, () => {
  console.log(`My port ${port}`)
})

routerApi(app);
app.use(handleBoomError)
app.use(logErrors)
