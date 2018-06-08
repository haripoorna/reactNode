const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send({Hello: 'This is a Node reach project'});
})

app.listen(5000, function(){
    console.log('server running at port 5000')
});