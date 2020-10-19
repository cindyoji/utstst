const connection = require('./dbcon')

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers' : '*'
    });
    next();
});

exports.insertname = (req, res) => {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    connection.query('INSERT INTO input(firstname, lastname) VALUES(?,?)'), [firstname, lastname], (error,rows,fields => {
        if(error) console.log(error);
        else res.send(rows)
    })
}