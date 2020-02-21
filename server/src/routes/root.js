import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
    return res.send(Object.values(req.context.data));
});

export default router;
