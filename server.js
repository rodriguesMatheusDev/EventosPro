const express = require('express');
const app = express();
const path = require('path');
const eventos = require('./data/eventos');

app.set('view engine', 'ejs'); 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { eventos });
});

app.get('/evento/:id', (req, res) => {
    const eventoId = req.params.id;
    
    const evento = eventos.find(e => e.id == eventoId) || eventos[0]; 

    res.render('detalhes', { evento });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/registro', (req, res) => {
    res.render('registro');
});

app.get('/dashboard-participante', (req, res) => res.render('dash-participante'));
app.get('/dashboard-organizador', (req, res) => res.render('dash-organizador'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});