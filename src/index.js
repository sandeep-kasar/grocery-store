import dotenv from "dotenv"
dotenv.config()
import connectDb from "./db/index.js";
import app from "./app.js";

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`);

    })
})
.catch((err)=>{
    console.log("Mongo db connection failed !!!", err);
})






