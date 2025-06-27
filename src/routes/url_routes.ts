import express from "express"
import generateShortUrl from "../controllers/short_url"
import urlModel from "../models/url_schema"
import getShortenedUrl from "../controllers/get_url"
const router = express.Router()

router.post("/url", generateShortUrl)
router.get("/:shortId", getShortenedUrl)

export default router