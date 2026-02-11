import express from 'express'
import { createuser,getuser,updateuser,deleteuser ,getuserbyid } from '../controllers/controller.js'

const router = express.Router()

router.get("/",getuser)
router.get("/:id",getuserbyid)
router.post("/",createuser)
router.put("/:id",updateuser)
router.delete("/:id",deleteuser)




export default router

