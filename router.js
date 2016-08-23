/**
 * @author Volosincu Bogdan
 */


var Router = Backbone.Router.extend({


    initialize: function() {
	Backbone.history.start();
    },

    
    routes: {
	"":                    "home", 
	"login":                "login"
    },
    
    
    home : function() {
	//$("#login-frame").css({display : "none"});
	console.log("home");
    },

    login: function() {

	console.log(firebase.auth().currentUser);
	if(firebase.auth().currentUser != null){
	    window.location = "/"
	}else {
	    console.log("login");
	    //$("#login-frame").css({display : "inherit"});
	    
	    window.open("login.html","_blank","height=600,width=700, status=yes,toolbar=no,menubar=no,location=no");
	}
    }


        

});





new Router();




