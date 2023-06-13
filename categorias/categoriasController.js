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
            res.redirect("/admin/categorias");
        })

    }else{
        res.redirect("/admin/categorias/new");
    }
})

//ROTA PARA EXIBIR AS CATEGORIAS E AÇÕES

router.get("/admin/categorias", (req, res)=>{

    Categoria.findAll().then(categorias =>{
        res.render("./admin/admCategorias", {categorias: categorias});
    }); 
})

//ROTA PARA DELETAR DADOS DA TABELA
router.post("/categorias/delete",(req, res)=>{
    let id = req.body.id;

    Categoria.destroy({
        where: {
            id: id
        }
    }).then(()=>{
        res.redirect("/admin/categorias")
    });
});

//ROTA PARA EDIÇÃO DE CATEGORIA POR ID
router.get("/admin/categorias/edit/:id", (req, res)=>{
    var id = req.params.id;
    Categoria.findByPk(id).then(categoria =>{

        if(categoria != undefined){
            res.render("./admin/editCategorias", {categoria: categoria});

        }else{
            res.redirect("/admin/categorias")
        }
    }).catch(erro =>{
        res.redirect("/admin/categorias")
    })

});


module.exports = router;