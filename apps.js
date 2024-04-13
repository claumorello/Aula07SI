const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var myData = []; 
myData.push("primeiro elemento do array");
myData.push("segundo elemento do array");

app.listen(8000, () => {
 console.log(' App rodando na porta 8000')
});

var myData = [];

app.post('/criar', (req, res) => {

    const { nome, rgm, disciplina } = req.body;
    myData.push( nome );
    myData.push( rgm );    
    myData.push(disciplina)

    res.json(myData);
});

app.get('/listagem', (req, res) => {
    res.json("pessoas, pet, disciplina, etc");
});
