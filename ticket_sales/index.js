const express = require(`express`)
const app = express()
const PORT = 8000

const cors = require(`cors`)
app.use(cors())
const userRoute = require(`./routes/user.route`)
app.use(`/user`, userRoute)

app.listen(PORT, () => {
    console.log(`Server of Ticket Sales run on port ${PORT}`)
})