const mongoose = require('mongoose');

const connectDB = async () => {

    //TODO: Research how to make the latest connection string to work
    // let uri = `mongodb+srv://${process.env.MONGO_DB_ACCESS_USERNAME}:${process.env.MONGO_DB_ACCESS_PASSWORD}@cluster0.113gf.mongodb.net/todo_list?retryWrites=true&w=majority`

    // used connection string for nodejs v2.2.12 or later to make the connection work
    let uri = `mongodb://${process.env.MONGO_DB_ACCESS_USERNAME}:${process.env.MONGO_DB_ACCESS_PASSWORD}@cluster0-shard-00-00.113gf.mongodb.net:27017,cluster0-shard-00-01.113gf.mongodb.net:27017,cluster0-shard-00-02.113gf.mongodb.net:27017/todo_list?ssl=true&replicaSet=atlas-kdcu2o-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    try {
        const client = await mongoose.connect(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        })
        console.log(`Connected to database: ${client.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB