import express from "express";
import cors from "cors";
import data from "./src/data";
import routes from "./src/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    req.context = {
        data,
    };
    next();
});

app.use("/", routes.root);
app.use("/detail/", routes.detail);
app.use("/create/", routes.create);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
