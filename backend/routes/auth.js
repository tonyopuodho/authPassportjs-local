import { Router } from "express";
import authcontrollers from '../controllers/authcontrollers.cjs'
const router = Router()
router.post("/register",authcontrollers.registerUser)
router.post("/login", authcontrollers.loginUser)
router.get("/home",authcontrollers.homepage)
router.get("/logout",authcontrollers.logoutuser)
export default router