const express = require('express')
const meteorsRouter = require('./src/routers/meteorsRouter')

const app = express();
app.use(express.json())
app.use('/meteors', meteorsRouter)

app.listen(process.env.PORT, () => {
  console.log('server listens to port 4000')
})