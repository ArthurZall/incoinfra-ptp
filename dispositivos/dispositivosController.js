const express = require("express");
const router = express.Router();
const Dispositivos = require("./Dispositivos")

router.get("/dispositivos", (req, res)=>{
    res.send("Rota de dispositivos")
});

//ROTA PARA RENDERIZAR O FORMULARIO DE NOVOS DISPOSITIVOS

router.get("/admin/dispositivos/new", (req, res)=>{
    res.render("./admin/admDispositivos")
})

//ROTA PARA SALVAR OS DADOS DO FORMULARIO
router.post("/dispositivos/save", (req, res)=>{

    let marca = req.body.marca;
    // let modelo = req.body.modelo;
    // let numeroSerial = req.body.numeroSerial;
    // let SistemaOperacional = req.body.SistemaOperacional;     
    // let configuracao = req.body.Configuracao; 
    // let setor = req.body.setor; 

    Dispositivos.create({
        marca: marca,
        // modelo: modelo,
        // numeroSerial: numeroSerial,
        // SistemaOperacional: SistemaOperacional,
        // Configuração: configuracao,
        // setor: setor

    }).then(()=>{
        res.redirect("/")
    });


});


module.exports = router;