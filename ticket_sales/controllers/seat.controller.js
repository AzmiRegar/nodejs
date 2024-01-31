const {request, response } = require ("../routes/user.route")

const seatModel = require(`../models/index`).seat
const Op = require(`sequelize`).Op

exports.getAllSeat = async (request,response) => {
    let seats = await seatModelModel.findAll()
    return response.json({
        success: true,
        data: seats,
        message: `All Seats have been loaded`
    })
}

exports.findSeat = async (request, response) => {
    let keyword = request.params.key
    let seats = await seatModel.findAll({
        where: {
            [Op.or]: [
                {rowNum: { [Op.substring]: keyword} },
                {seatNum: { [Op.substring]: keyword} },
                {status: { [Op.substring]: keyword} }
            ]
        }
    })
    return response.json({
        success: true,
        data: seats,
        message: `All Seats have been loaded`
    })
}

exports.addSeat = (request,response) => {
    upload(request, response, async error => {
        if (error) {
            return response.json({ message: error})
        }

        let newSeat = {
            rowNum: request.body.rowNum,
            seatNum: request.body.seatNum,
            status: request.body.status
        }

        seatModel.create(newSeat)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New seat has been inserted`
            })
        })
        .catch (error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
    })
}