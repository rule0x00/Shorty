import urlModel from "../models/url_schema"

const getShortenedUrl = async (req, res) => {
    const shortId = req.params.shortId

    console.log(shortId)

    const doc = await urlModel.findOneAndUpdate({
        urlShortId: shortId
    }, {
        "$push": {
            visits: {
                timestamp: Date.now()
            }
        }
    })

    console.log("redirect url is", doc.redirectURL)
    return res.redirect(doc.redirectURL)
}

export default getShortenedUrl

