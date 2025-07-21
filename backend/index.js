import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import dotenv from 'dotenv'
const app = express()
dotenv.config

app.use(cors({
    origin:'http://localhost:5173',
    methods:["POST","GET"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret:process.env.SESSION_SECRETE,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.use("/api",authRouter)
app.listen(3000,() => {
    console.log("Server is running")
})