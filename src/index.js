const express = require('express')
const meteorsRouter = require('./routers/meteorsRouter')

const app = express();
app.use(express.json())
app.use('/meteors', meteorsRouter)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({message: err.message});
});

app.use('*', (req, res) =>
    res.status(404).json({message: 'Page not found'}),
);

app.listen(process.env.PORT, () => {
  console.log('server listens to port 4000')
})