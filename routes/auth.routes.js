import { Router } from "express";
import { signIn, signOut, signUp } from "../controller/auth.controller.js";

const authRouter = Router();

// Path: /api/v1/auth/sign-up (post)
authRouter.post('/sign-up', signUp);

// Path: /api/v1/auth/sign-in (post)
authRouter.post('/sign-in', signIn);

// Path: /api/v1/auth/sign-out (post)
authRouter.post('/sign-out', signOut);

export default authRouter;