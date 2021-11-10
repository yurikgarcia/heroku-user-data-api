const app = require('./app')
const port = (process.env.PORT || 8080)


app.listen(port, ()=>console.log(`User Data API is listening on port ${port}`));