const express = require("express");
const router = express.Router();
const Categoria =require("./Categoria");
const slugify = require("slugify");

//ROTA PRINCIPAL 
router.get("/categorias", (req, res)=>{
    res.send("Rota para categorias")
});

//ROTA PARA FORMULARIO DE CATEGORIA
router.get("/admin/categorias/new", (req, res)=>{
    res.render("./admin/novaCategoria")
});

//ROTA PARA ENVIAR OS DADOS AO BANCO
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

//ROTA PARA EXIBIR AS CATEGORIAS E AÇÕES

router.get("/admin/categorias", (req, res)=>{
    res.render("./admin/admCategorias");
})


module.exports = router;