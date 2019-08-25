const express = require('express');
const router = express.Router();


router.get('/', (req, res) =>{
    res.render('index')
});



router.get('/login', (req, res, next) => {
    res.render('login')
});

router.get('/registrar', (req, res, next) => {
    res.render('registrar')
});

router.get('/comes', (req, res, next) => {
    res.render('comes')
});

router.get('/aseo', (req, res, next) => {
    res.render('aseo')
});

router.get('/alim', (req, res, next) => {
    res.render('alim')
});

router.get('/bebida', (req, res, next) => {
    res.render('bebida')
});

module.exports = router;



