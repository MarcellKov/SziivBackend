import { ObjectId } from "mongodb";
import { Country } from "./country"

export default class Job{
    constructor(public poster:String,public country:Country, public id?:ObjectId){}
}