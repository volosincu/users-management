/**
 * @author Volosincu Bogdan
 */


var Router = Backbone.Router.extend({

    initialize: function() {
	Backbone.history.start();
    },
    
    routes: {
	"": "home", 
	"login": "login"
    },
    
    home : function() {
	console.log(firebase.auth().currentUser);	
    },
    
    login: function() {
	
	if(firebase.auth().currentUser != null){
	    window.location = "/"
	}else {
	    var _params = [
		"login.html",
		"_blank",
		"height=600,width=700, status=yes,toolbar=no,menubar=no,location=no"
	    ];
	    window.open.apply(_params);
	}
    }     

});


new Router();



/**
 *  catch firebase authentication event
 */

firebase.auth().onAuthStateChanged(function(user) {
    var header, headerView, tabs, tabsView;

    if (user) {
        // User is signed in.

	header = new HeaderModel({
	    logged : "show",
	    loggedout : "hide",
	    displayName: user.displayName,
	    email : user.email
	});
				
    } else {
	header = new HeaderModel({
		logged : "hide",
		loggedout : "show"
	});
	
    }

    headerView = new HeaderView({el: '#header', model : header});
    headerView.render();

    tabs = new TabsModel();
    tabsView = new TabsView({el : '#main-section', model : tabs});
    tabsView.render();
});





