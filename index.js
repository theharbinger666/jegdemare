const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello PepinTeen!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const argList = process.argv.slice(2);
    var sum = 0;
    argList.forEach(value => {
        console.log("Valoarea care va fi adaugata " + value);
        sum += Number(value);
    });
    console.log("Suma este " + sum);
