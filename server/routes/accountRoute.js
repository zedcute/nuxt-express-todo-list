const router = require('express').Router()

router.get('/:accountName', (req, res) => {
    let { accountName } = req.params
    if (!accountName) {
        res.status(401).json({
            message: 'Account not found'
        })
    }
    res.json({
        message: `You are logged in as ${accountName}`
    })
})

module.exports = router