const express = require("express");
const router = express.Router();

router.get("/categorias", (req, res)=>{
    res.send("Rota para categorias")
});

router.get("/admin/categorias/new", (req, res)=>{
    res.send("Rota para CRIAR categorias")
});

module.exports = router;