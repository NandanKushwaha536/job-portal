import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:5173',
    methods: ["POST","GET", "OPTIONS"],
    credentials:true
}


app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// api's
import userRoute from "./routes/user.route.js";
app.use("/api/v1/user", userRoute);
import companyRoute from "./routes/company.route.js";
app.use("/api/v1/company", companyRoute);
import jobRoute from "./routes/job.route.js";
app.use("/api/v1/job", jobRoute);
import applicationRoute from "./routes/application.route.js";
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,async()=>{
     await connectDB();
    console.log(`Server running at port ${PORT}`);
})