const students =  [{
    "id": 100,
    "name": "Bodo",
    "car": "Mini Cooper"
}, {
    "id": 2,
    "name": "Daniel",
    "car": "Trabant"
}] 



const express = require('express');
const app = express();
 
app.get('/', function(req, res) {
    res.send("No zi sincer,vrei un Bemveu");
});
app.get('/api/students', function(req, res) {
    res.send(students);
});
app.get('/api/students/:id', function(req, res) {
    res.send(students[req.params.id]);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`))
