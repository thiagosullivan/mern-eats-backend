import express, { Handler } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

router.post("/", jwtCheck, MyUserController.createCurrentUser as any);
router.put(
  "/",
  jwtCheck,
  jwtParse as Handler,
  validateMyUserRequest as any,
  MyUserController.updateCurrentUser as any
);

export default router;
