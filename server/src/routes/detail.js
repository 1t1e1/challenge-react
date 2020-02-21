import { Router } from "express";
const router = Router();

router.get("/:id", (req, res) => {
    // make id is not found
    return res.send(req.context.data[req.params.id]);
});

export default router;
