import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js"
import { createSubscription, getSubscription } from "../controller/subscription.controller.js";

const subscriptionRouter = new Router(); 

subscriptionRouter.get('/', (req,res)=> res.send( {title: "Get all the subscriptions"}));
subscriptionRouter.get('/:id', (req,res)=> res.send( {title: "Get subscription details"}));
subscriptionRouter.post('/', authorize , createSubscription);
subscriptionRouter.put('/:id', (req,res)=> res.send( {title: "Update the subscription"}));
subscriptionRouter.delete('/:id', (req,res)=> res.send( {title: "Delete the subscription"}));
subscriptionRouter.get('/user/:id', authorize , getSubscription);
subscriptionRouter.put('/:id/cancel', (req,res)=> res.send( {title: "Cancel the subscription"}));
subscriptionRouter.put('/upcoming-renewals', (req,res)=> res.send( {title: "Get upcoming renewals"}));



export default subscriptionRouter;