import express, { Handler, RequestHandler } from "express";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

router.get(
  "/",
  jwtCheck,
  jwtParse as Handler,
  MyRestaurantController.getMyRestaurant as RequestHandler
);
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest as any,
  jwtCheck,
  jwtParse as Handler,
  MyRestaurantController.createMyRestaurant as RequestHandler
);

export default router;
