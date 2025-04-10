import express, { Router } from "express";
import { checkoutController } from "../controllers/checkout.controller";

const router: Router = express.Router();

router.post("/payment-intent", checkoutController.getPaymentIntent);

export default router;
