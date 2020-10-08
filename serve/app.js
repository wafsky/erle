const express = require('express')
const Goods = require("./model/goods")
const app = new express()
const bodyParser = require('body-parser')
const cors = require("cors")
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.get("/list", (req, res) => {

    Goods.find().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                list: mon
            })
        }
    })
})
app.get("/type/:id", (req, res) => {
    const id = req.params.id
    Goods.findById(id).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                data: mon
            })
        }
    })
})







app.listen(8888, '127.0.0.1')