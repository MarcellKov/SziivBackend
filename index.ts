import express from "express"
import {Request} from "express"
import { Country} from "./country"
import cors from "cors"
import { collections } from "./db_utils/mongo"
import Job from "./job"

const Router=express.Router()
Router.use(express.json())

const app=express()

app.use(Router)
app.use(cors<Request>({origin:"*"}))




app.get("/Jobs",async (req,res)=>{
    try{
        const jobs=(await collections.jobs!.find({}).toArray()) as unknown as Job[]
        return res.send(jobs)
    }
    catch
    {
        return res.send("Conncetion failed")
    }
})

app.listen(2000,()=>{console.log("Server is up!")})

