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


    const { marca, modelo, numeroSerial, sistemaOperacional, configuracao, setor } = req.body

    res.status(200).json({marca, modelo, numeroSerial, sistemaOperacional, configuracao, setor});

   
    Dispositivos.create({
        marca: marca,
        modelo: modelo,
        numeroSerial: numeroSerial,
        sistemaOperacional: sistemaOperacional,
        configuracao: configuracao,
        setor: setor

    }).then(()=>{
        res.redirect("/")
    });


});


module.exports = router;