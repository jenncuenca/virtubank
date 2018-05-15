var exports = module.exports = {}

// for signup page
exports.signup = function(req,res){

	res.render('signup'); 

}

// for sign in page
exports.signin = function(req,res){

	res.render('signin'); 

}

//for dashboard
exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

// for logout
exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}