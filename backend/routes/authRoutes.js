import { Router } from "express";
const router = Router();

import { userRegister, userLogin } from "../controllers/authContoller.js";

//-------------------Registration-------------------------

router.post("/user-register", userRegister);


//---------------------Login--------------------------

router.post("/user-login", userLogin);


export default router;
