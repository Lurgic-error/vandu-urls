let mongoose = require('mongoose');

const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'vandu-urls'; // REPLACE WITH YOUR DB NAME
const uri = `mongodb://${server}/${database}`

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

function connectToDatabase(url, options={}){
    return async function(){
        try {
            await mongoose.connect(url, options)
            console.log(`Successfully connected to ${database}.`)
        } catch (error) {
            console.error(error)
        }
    }
}
module.exports = connectToDatabase(uri, options);
