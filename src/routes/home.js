const   express = require('express'),
        router = express.Router(),
        Task = require('../models/task')

router.get('/', async (req, res) => {
    res.json({ status: "Saved" })
})

module.exports = router