const app = require('./app')
const port = (process.env.PORT) // THIS IS IMPORTANT - HEROKU DECIDES WHICH PORT


app.listen(port, ()=>console.log(`User Data API is listening on port ${port}`));