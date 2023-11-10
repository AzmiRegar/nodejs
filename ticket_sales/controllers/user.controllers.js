const userModel = require(`../models/index`).user
const { response, request } = require("express")
const md5 = require(`md5`)

const Op = require(`sequelize`).Op


exports.getAllUser = async (request, response) => {
    let users = await userModel.findAll()
    return response.json({
        success: true,
        data: users,
        message: `All users have been loaded`
    })
}


exports.findUser = async (request,response) => {
    let keyword = request.params.key

    let users = await userModel.findAll({
        where: {
            [Op.or]: [
            { userID: { [Op.substring]: keyword } },
            { firstname: { [Op.substring]: keyword } },
            { lastname: { [Op.substring]: keyword } },
            { email: { [Op.substring]: keyword } },
            { role: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
        success: true,
        data: users,
        message: `All Users have been loaded`
    })
}


exports.addUser = (request,response) => {
    let newUser = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: md5(request.body.password),
        role: request.body.role
    }

    userModel.create(newUser)
    .then(result => {
        return response.json({
            success: true,
            data: result,
            message: `New user has been inserted`
        })
    })
    .catch(eror => {
        return response.json({
            success: false,
            message: error.message
        })
    })
}


exports.updateUser = (request,response) => {
    let dataUser = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: md5(request.body.password),
        role: request.body.role
    }
    if (request.body.password) {
        dataUser.password = md5 (request.body.password)
    }
    let userID = request.params.id

    userModel.update(dataUser, {where: { userID : userID} } )
    .then(result => {
        return response.json({
            success: true,
            message: `Data user has been updated`
        })
    })
    .catch(eror => {
        return response.json({
            success: false,
            message: error.message
        })
    })
}


exports.deleteUser = (request,response) => {
    let userID = request.params.id

    userModel.destroy({where: {userID: userID} } )
    .then(result => {
        return response.json({
            success: false,
            message: error.message
        })
    })
}