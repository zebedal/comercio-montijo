import { MongoClient } from "mongodb";

export const dbConnect = async () => {
    const client = await MongoClient.connect("mongodb+srv://zebedal:azerty1978@pagein.lcuao.mongodb.net/PageIn?retryWrites=true&w=majority")
    return client
}

export const insertDocument = async (client, collection, document) => {
    const db = client.db()
    const result = await db.collection(collection).insertOne(document)
    return result
}