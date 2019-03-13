const knex = require("../db/knex.js");

module.exports = {
    main: function(req, res) {
        knex('users').then((result)=>{
            knex('transactions').then((transactions)=>{
                res.render("main", {users: result, transactions: transactions});
            })
        })
      },
    postTrans: (req,res)=>{
        knex('transactions').insert({
            user_id: req.body.user_id,
            amount: req.body.amount,
            type: req.body.type,
            business_name: req.body.business_name
        }).then(()=>{
            res.redirect('/')
        })
    },
    deleteTrans: (req,res)=>{
        knex('transactions').where('id', req.params.id).del()
        .then(()=>{
          res.redirect('/')
        })
    },
    updateTrans:(req,res)=>{
        knex('transactions').where('id', req.params.id).update({
            user_id: req.body.user_id,
            amount: req.body.amount,
            type: req.body.type,
            business_name: req.body.business_name
          })
          .then(()=>{
            res.redirect('/')

          })
    }
}
