import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(authRouter)
app.listen(3000,() => {
    console.log("Server is running")
})