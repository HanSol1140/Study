import express, { Router } from 'express';
import * as DBController from '../Controllers/DBController'
const DBRouter: Router = express.Router();

DBRouter.post("/contacts", DBController.writeContacts_controller);
DBRouter.get("/contacts", DBController.readContacts_controller);

export default DBRouter