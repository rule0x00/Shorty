import { timeStamp } from 'console'
import mongoose from 'mongoose'

interface visits{
    timestamp: number

}
const visitSchema = new mongoose.Schema({
    timestamp: {type: Number}
})


interface urlInterface{
    urlShortId: string
    redirectURL: string
    visits: [visits]
}

const urlSchema = new mongoose.Schema({
    urlShortId: {type: String, },
    redirectURL: {type: String, },
    visits: {type: [visitSchema]}
},
{
    timestamps: true
})

const urlModel = mongoose.model<urlInterface>("urls", urlSchema)

export default urlModel