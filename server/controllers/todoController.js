const { Todo } = require('../models/')

class TodoController {
    static create(req, res) {
        let { title, description, due_date } = req.body
        Todo.create({
            title, description, due_date, status:false
        })
        .then(data => {
            res.status(201).json({data})
        })
        .catch(err => {
            console.log(err, '<== error')
            let error = err.errors[0].message || 'Internal server error'
            res.status(500).json({error})
        })
    }

    static findAll(req, res) {
        Todo.findAll()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            console.log(err, '<== error')
            let error = err.errors[0].message || 'Internal server error'
            res.status(500).json({error})
        })
    }

    static findByPk(req, res) {
        const { id } = req.params
        Todo.findByPk(id)
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            console.log(err, '<== error')
            let error = err.errors[0].message || 'Internal server error'
            res.status(404).json({msg: 'data not found'})
        })
    }

    static update(req, res) {
        let { title, description, due_date } = req.body
        const { id } = req.params
        Todo.findByPk(id)
        .then(data => {
            if(!data) {
                res.status(404).json({ msg: 'data not found'})
            } else {
                data.update({
                    title, description, due_date
                })
                res.status(200).json({msg:'success edit data', data})
            }
        })
        .catch(err => {
            console.log(err, '<== error')
            let error = err.errors[0].message || 'Internal server error'
            if(err.name === "SequelizeValidationError"){
                res.status(400).json({error})
            } else {
                res.status(500).json({error})
            }
        })
    }

    static delete(req, res) {
        const { id } = req.params
        Todo.findByPk(id)
        .then(data => {
            if(!data) {
                res.status(404).json({ msg: 'data not found'})
            } else {
                data.destroy()
                res.status(200).json({msg:'success delete data', data})
            }
        })
        .catch(err => {
            console.log(err, '<== error')
            let error = err.errors[0].message || 'Internal server error'
            res.status(500).json({error})
        })
    }
}

module.exports = TodoController