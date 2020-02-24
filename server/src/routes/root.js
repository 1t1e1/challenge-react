import { Router } from "express";

const router = Router();
router.get("/", (req, res) => {
    for (let index = 0; index < 10; index++) {
        req.context.data.saveBook(
            index,
            "title" + index,
            "author" + index,
            "publisher" + index,
        );
        req.context.data.writeMetrics();
    }

    return res.send(Object.values(req.context.data));
});

router.get("/toplu", (req, res) => {
    return res.send(req.context.data.readData());
});

export default router;
