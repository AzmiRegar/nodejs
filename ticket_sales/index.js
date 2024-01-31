const express = require(`express`)
const app = express()
const PORT = 8000


const cors = require(`cors`)
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//auth
const auth = require(`./routes/auth.route`)
app.use(`/auth`, auth)

//user
const userRoute = require(`./routes/user.route`)
app.use(`/user`, userRoute)

//event
const eventRoute = require(`./routes/event.route`)
app.use(`/event`, eventRoute)
app.use(express.static(__dirname))


//port
app.listen(PORT, () => {
    console.log(`Server of Ticket Sales run on port ${PORT}`)
})