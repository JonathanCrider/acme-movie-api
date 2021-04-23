const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.connect(port, () => console.log(`listening on port ${port}`))

app.get('/', (req, res, next) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        Acme Movie API
      </body>
    </html>
  `)
})

module.exports = app