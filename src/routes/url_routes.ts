import express from "express"
import generateShortUrl from "../controllers/short_url"
import urlModel from "../models/url_schema"
import getShortenedUrl from "../controllers/get_url"
import { Request, Response } from "express";
const router = express.Router()

router.post("/url", generateShortUrl)
router.get("/:shortId", getShortenedUrl)

router.get('/' , async(req: Request, res: Response)=>{
    const allUrls = await urlModel.find({})
    return res.render("home",{
        urls: allUrls,
    })
})


export default router