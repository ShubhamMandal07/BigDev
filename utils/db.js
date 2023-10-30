import mongoose from 'mongoose';

const connect = async () =>{
    if(mongoose.connections[0].readyState) return;

    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongo Connection Sucess")
    }catch(error){
        throw new Error("Couldn't connect to Mongo");
    }
}

export default connect;