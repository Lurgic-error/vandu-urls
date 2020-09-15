require('dotenv').config()
const urlModel = require('../models/url.model')
const validURL = require('valid-url');
const shortID = require('shortid')


class URLServices {

    async create(data) {
        const urlCode = shortID.generate()
        const { full } = data
        if(validURL.isUri(full)){
            try {
                let url = await urlModel.findOne({ full })
                if(url){
                    return url
                }else{
                    const short = `${process.env.baseURL}/${urlCode }`
                    const uri = await urlModel.create({
                        full, 
                        short,
                        code:urlCode
                    })
                    return uri
                }
            } catch (error) {
                console.error(error)
                throw error
            }
        }
    }

    async get(code) {
        if (code) {
            const url = await urlModel.findOne({code})
            if (!url) throw 'Could not find url.'
            return url
        } else {
            const urls = await urlModel.find()
            return urls
        }
    }

    async view(code) {
        const url = await urlModel.findOne({code})
        if (!url) throw 'Could not find url.'
        url.views++
        await url.save()
        return url
    }

    async delete(code){
        console.log('code', code)
        const url = await urlModel.findOneAndDelete({code})
            if(!url) throw 'Could not find url.'

    }
}

module.exports = new URLServices()