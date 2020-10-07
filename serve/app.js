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
    console.log("aa")
    Goods.find().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                list: mon
            })
        }
    })
})








app.listen(8888, '127.0.0.1')