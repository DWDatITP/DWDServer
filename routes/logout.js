module.exports = {
  get: function(req,res){
    delete req.session.user;

    res.redirect('/');
  }
};
