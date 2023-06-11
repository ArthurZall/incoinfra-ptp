const express = require("express");
const router = express.Router();

router.get("/dispositivos", (req, res)=>{
    res.send("Rota de dispositivos")
});

router.get("/admin/dispositivos/new", (req, res)=>{
    res.send("Rota para criar novos dispositivos")
})

module.exports = router;