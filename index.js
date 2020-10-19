const express = require("express")
const path = require('path')
const routes = require('./route')

const app = express()

var PORT = process.env.report || 3000

app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, function(error) {
    if(error) throw error
    console.log("Server created successfully on PORT", PORT)
})