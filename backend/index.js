const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`testing ${req.query.name}`)
})

app.listen(port, () => {
  console.log(`canopy listening on port ${port}`)
})  