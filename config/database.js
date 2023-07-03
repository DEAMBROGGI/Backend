const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
})
.then(()=>console.log("DB Conectada"))
.catch(err=>console.error(err))