const { request, response } = require("../routes/user.route")

const seatModel = require(`../models/index`).seat
const userModel = require(`../models/index`).user
const eventModel = require(`../models/index`).event
const ticketModel = require(`../models/index`).ticket

const Op = require(`sequelize`).Op

exports.addTicket = async (request, response) => {
    const today = new Date()
    const bookedDate =  `${today.getFullYear()}-
                         ${today.getMonth() +1}-
                         ${today.getDate()}
                         ${today.getHours()}:
                         ${today.getMinutes()}:
                         ${today.getSeconds()}`

    const { eventID, userID, seats } = request.body;

    try {
        const seatIDs = await Promise.all(seats.map(async seat => {
            const { rowNum, seatNum} = seat;
            const createdSeat = await seatModel.create({
                eventID,
                rowNum,
                seatNum,
                status: `true`
            });
            return createdSeat.seatID;
        }));

        const tickets = await ticketModel.bulkCreate(seatIDs.map(seatID => ({
            eventID,
            userID,
            seatID,
            bookedDate
        })));
        response.status(201).json(tickets);
    } catch (error) {
        return response.json ({
            success: false,
            messaage: error.message
        })
    }
}

exports.getAllTicket = async (request, response) => {
    let tickets = await ticketModel.findAll (
        {
            include: [
                { model: eventModel, attributes: ['eventName',`eventDate`, 'venue']},
                { model: userModel, attributes: ['firstName',`lastName`]},
                { model: seatModel, attributes: ['rowNum',`seatNum`]},
            ]
        }
    )
    return response.json({
        success: true,
        data: tickets,
        messaage: `All tickets have been loaded`
    })
}

exports.ticketByID = async (request, response) => {
    let ticketID = request.params.id
    let tickets = await ticketModel.findAll({
        where: {
            ticketID: { [Op.substring]: ticketID}
        },
        include: [
            { model: eventModel, attributes: ['eventName',`eventDate`, 'venue']},
            { model: userModel, attributes: ['firstName',`lastName`]},
            { model: seatModel, attributes: ['rowNum',`seatNum`]},
        ]
    })
    return response.json({
        success: true,
        data: tickets,
        message: `All tickets have been loaded`
        })
}