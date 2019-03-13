const transactions = require("../controllers/transactions.js")

module.exports = function(app){
    app.get('/', transactions.main);
    app.post('/postTrans', transactions.postTrans);
    app.post('/updateTrans/:id', transactions.updateTrans); 
    app.get('/deleteTrans/:id', transactions.deleteTrans);
}