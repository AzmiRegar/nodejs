const eventModel = require(`../models/index`).event
const Op = require(`sequelize`).Op
const path = require(`path`)
const fs = require(`fs`)
const { request } = require("http")
const { response } = require("../routes/user.route")

exports.getAllEvent = async (request,response) => {
    let events = await eventModel.findAll()
    return response.json({
        success: true,
        data: events,
        message: `All Events have been loaded`
    })
}


exports.findEvent = async (request, response) => {
    let keyword = request.params.key
    let events = await eventModel.findAll({
        where: {
            [Op.or]: [
                {eventName: { [Op.substring]: keyword} },
                {eventDate: { [Op.substring]: keyword} },
                {venue: { [Op.substring]: keyword} },
                {price: { [Op.substring]: keyword} }
            ]
        }
    })
    return response.json({
        success: true,
        data: events,
        message: `All Events have been loaded`
    })
}