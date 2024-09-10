import express from "express";

const friendsRouter = express.Router();

import { getAllFriends, getFriend, addNewFriend, deleteFriend } from "../controllers/friends.controller.js";

friendsRouter.use((req, res, next) => {
    console.log('IP address: ', req.ip);
    next();
})

friendsRouter.post("/", addNewFriend )
friendsRouter.get("/", getAllFriends);
friendsRouter.get("/:id", getFriend);
friendsRouter.delete("/delete-friend/:id", deleteFriend)

export default friendsRouter; 