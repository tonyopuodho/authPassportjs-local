import { Router } from "express";
import authcontrollers from '../controllers/authcontrollers.cjs'
const router = Router()

router.post("/api/register",authcontrollers.registerUser)

export default router