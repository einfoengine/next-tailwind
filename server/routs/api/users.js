import express from "express";
const router = express.Router();

router.get('/registration', (req, res)=>{
    res.send("Registraion responded!")
});
router.post('/registration', (req, res)=>{
    console.log(req.body);
    res.json({
        data: req.body
    })
    // res.send("Registraion responded!")
});

export default router;