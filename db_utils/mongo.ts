import * as mongo from "mongodb"
export const collections: { jobs?: mongo.Collection } = {}
export async function ConnectToDatabase() {
    const client=new mongo.MongoClient("mongodb://localhost:27017")

    await client.connect()

    const db:mongo.Db = client.db("Sziiv")

    const JobCollection:mongo.Collection=db.collection("Jobs")
    collections.jobs=JobCollection
    console.log("Connected")
}
ConnectToDatabase()
