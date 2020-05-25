const Cost = require('../models/cost');

module.exports = {
    async index(req, res) {
        try {
            const cost = await Cost.find();

            return res.send({
                cost
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error loading costs'
            })
        }
    },

    async create(req, res) {
        try {
            const cost = await Cost.create({
                ...req.body
            });

            return res.send({
                cost
            });

        } catch (error) {
            console.log(error)
            return res.status(400).send({
                error: 'Error creating new cost'
            });
        }
    },

    async update(req, res) {
        try {
            const cost = await Cost.findByIdAndUpdate(req.params.costId, {
                ...req.body
            }, {
                new: true
            });

            return res.send({
                cost
            });
        } catch (error) {
            return res.status(400).send({
                error: 'Error updating cost'
            });
        }
    },
    async delete(req, res) {
        try {
            await Cost.findByIdAndRemove(req.params.costId);

            return res.send();
        } catch (error) {
            return res.status(400).send({
                error: 'Error deleting cost'
            })
        }
    }
}