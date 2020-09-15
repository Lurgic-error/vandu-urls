const urlServices = require('../services/url.services')

class URLController{

    async create(req, res){
        try {
            const url = await urlServices.create(req.body)
            res.status(201)
            return res.json({
                message:"Successfully created link.",
                url
            })
        } catch (error) {
            res.status(301)
            return res.json({
                message:"Could not create url.",
                error
            })
        }
    }

    async getAll(req, res){
        try {
            const url = await urlServices.get()
            res.status(200)
            return res.json({
                message:"Successfully fetched urls/",
                url
            })
        } catch (error) {
            res.status(400)
            return res.json({
                message:"Could not fetch urls."
            })
        }
    }

    async getOne(req, res){
        try {
            const url = await urlServices.get(req.params.code)
            res.status(200)
            return res.json({
                message:"Successfully fetched url.",
                url
            })
        } catch (error) {
            res.status(404)
            return res.json({
                message:"Could not fetch url.",
                error
            })
        }
    }

    async view(req, res){
        try {
            const url = await urlServices.view(req.params.code)
            res.status(200)
            res.redirect(url.full)
        } catch (error) {
            res.status(404)
            return res.json({
                message:"Could not fetch url.",
                error
            })
        }
    }

    async delete(req, res){
        try {
            const url = await urlServices.delete(req.params.code)
            res.status(200)
            return res.json({
                message:"Successfully deleted url.",
                url
            })
        } catch (error) {
            res.status(404)
            return res.json({
                message:"Could not delete url.",
                error
            })
        }
    }
}

module.exports = new URLController()