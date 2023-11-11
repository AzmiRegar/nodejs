const express = require(`express`)
const app = express()
app.use(express.json())
const ticketController = require(`../controllers/tiket.controllers`)

app.post("/", ticketController.addTicket)
app.get("/", ticketController.getAllTicket)
app.get("/:id", ticketController.ticketByID)

module.exports = app
const ticketRoute = require(`./routes/tiket.route`)
app.use(`/ticket`, ticketRoute)