const express = require("express");
const router = express.Router();
const Categoria =require("./Categoria");
const slugify = require("slugify");

router.get("/categorias", (req, res)=>{
    res.send("Rota para categorias")
});

router.get("/admin/categorias/new", (req, res)=>{
    res.render("./admin/adminCategoria")
});

router.post("/categorias/save", (req,res)=>{
    let titulo = req.body.titulo;

    if(titulo != undefined){

        Categoria.create({
            titulo: titulo,
            slug: slugify(titulo)
        }).then(()=>{
            res.redirect("/");
        })

    }else{
        res.redirect("/admin/categorias/new");
    }
})

module.exports = router;