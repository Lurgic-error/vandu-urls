const router = require('express').Router()

const urlRoutes = require('./url.routers')

router.use('/', urlRoutes)

router.get('/',(req, res)=>{
    return res.json({
        message:"Welcome to Vandu URLS"
    })
})


module.exports = router