import express from "express";
import path from "path";
import friendsRouter from "./routes/friends.route.js";
import messagesRouter from "./routes/messages.route.js";
import { fileURLToPath } from "url";



const app = express();
const PORT = 3000;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.baseUrl}${req.url}`);
    next(); 

    const delta = Date.now() - start;
    console.log(`Time: ${delta}ms`);
})

app.use("/site", express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", {
        title: "Ice Skating",
        caption: "What a wonderful day!",
    })
});

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
