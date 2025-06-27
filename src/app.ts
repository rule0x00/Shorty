import {Request, Response, urlencoded} from 'express'
import express from 'express'
import cors from 'cors'
import router from './routes/url_routes'
import { connection } from './utils/connection'
import path from 'path'
import ejs from 'ejs'
import urlModel from './models/url_schema'

const app = express()


connection().then(() => {
    console.log("Connected to MongoDB")
})

app.set("view engine", "ejs")

app.set("views", path.resolve("./src/views"))

app.use(cors())

app.use(express.urlencoded({extended:false})) 

app.use(express.json())

app.use("/", router)

app.get("/", async (req, res) => {
    const allUrls = await urlModel.find({})
    return res.render("home", {
        urls: allUrls
    } )
})

export default app; 