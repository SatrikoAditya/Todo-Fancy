const { Todo } = require('../models/')

class TodoController {
    static create(req, res, next) {
        let { title, description, due_date } = req.body
        const userId = req.loggedInUser.id
        Todo.create({
            title, description, due_date, status:false, userId
        })
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => {
            next(err)
        })
    }

    static findAll(req, res, next) {
        const userId = req.loggedInUser.id
        Todo.findAll({
            where : {
                userId
            }
        })
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            next(err)
        })
    }

    static findByPk(req, res, next) {
        const { id } = req.params
        Todo.findByPk(id)
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            next(err)
        })
    }

    static update(req, res, next) {
        let { title, description, due_date } = req.body
        const { id } = req.params
        Todo.findByPk(id)
        .then(data => {
            if(!data) {
                throw { name: 'DATA_NOT_FOUND'}
            } else {
                return data.update({
                    title, description, due_date
                },{
                    validate: true
                })
            }
        })
        .then(data => {
            res.status(200).json({msg:'success edit data', data})
        })
        .catch(err => {
            next(err)
        })
    }

    static delete(req, res, next) {
        const { id } = req.params
        Todo.destroy({
            where : {
                id
            }
        })
        .then(data => {
            res.status(200).json({msg:'success delete data', data})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = TodoController