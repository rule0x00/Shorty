import shortid from 'shortid'
import urlModel from "../models/url_schema"
import { Request, Response } from 'express'

const generateShortUrl = async (req, res) => {

    try{
    const url = req.body.url

    if(!url){
        return res.json({"Error": "No URL provided"})
    }
    const shortId = shortid() 

    const urlDoc = await urlModel.create({
        urlShortId: shortId,
        redirectURL: url,
        visits: []
    })

    console.log("url doc is ", urlDoc)
    return res.json({"Message": "Successfully created short ID", "Short ID": urlDoc.urlShortId })

}catch (error) {
        console.error('Error in generateShortUrl:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
}

export default generateShortUrl