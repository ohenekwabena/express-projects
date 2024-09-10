import express from "express";
import { getMessages } from "./controllers/messages.controller.js";
import friendsRouter from "./routes/friends.route.js";
import messagesRouter from "./routes/messages.route.js";


const app = express();
const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.baseUrl}${req.url}`);
    next(); 

    const delta = Date.now() - start;
    console.log(`Time: ${delta}ms`);
})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
