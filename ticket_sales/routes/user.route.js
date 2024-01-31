const express = require(`express`)
const app = express()
app.use(express.json())
const userController = require(`../controllers/user.controllers`)
const {midOne} = require ("../middlewares/simple_middleware")
const {validateUser} = require("../middlewares/user.validation")
const {authorize} = require("../controllers/auth.controller")
const {IsUser, IsAdmin} = require("../middlewares/role-validation")

// app.get("/", [midOne], userController.getAllUser)
app.get("/", authorize, IsAdmin, userController.getAllUser)
app.get("/:key", authorize,IsAdmin, userController.findUser)
app.post("/",authorize, IsAdmin, validateUser, userController.addUser)
app.put("/:id",authorize, IsUser, validateUser, userController.updateUser)
app.delete("/:id", authorize, IsAdmin, userController.deleteUser)
app.put("/reset/:id", userController.resetPass)
app.post("/registrasi", validateUser, userController.Registerasi)

module.exports = app
