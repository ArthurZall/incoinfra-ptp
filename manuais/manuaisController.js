const express = require("express");
const router = express.Router();

router.get("/manuais", (req, res)=>{
    res.send("Rota de manuais")
});

router.get("/admin/manuais/new", (req, res)=>{
    res.send("Rota para criar novos manuais")
})

module.exports = router;