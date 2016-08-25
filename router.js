
/**
 * @author Volosincu Bogdan
 */

var PubSub = new Publisher({});


var Router = Backbone.Router.extend({


    routes: {
	"": "homePath",
	"login": "loginPath"
    },

    
    initialize: function() {
	Backbone.history.start();

	PubSub.on('save-user', this.saveUser, this);
	PubSub.on('save-group', this.saveGroup, this);
	PubSub.on('notify', this.notify, this);

    },
    
    homePath : function() {
	// components are initialized in firebase change authentication event
	// @see firebase.authentication.js
    },
    
    loginPath : function() {
	
	if(firebase.auth().currentUser != null){
	    window.location = "/"
	}else {
	    var _params = [
		"login.html",
		"_blank",
		"height=600,width=700, status=yes,toolbar=no,menubar=no,location=no"
	    ];
	    window.open.apply(window, _params);
	}
    },
    
    saveUser : function(json){
	
	var us = new User(json);

	if(!us.isValid()){
	    PubSub.trigger('notify', us.validationError);
	}
	
	us.save({}, {
	    success : function(o){
		var msg = "Added successfully user " + o.get("name");
		PubSub.trigger('notify', msg);
		PubSub.trigger("refresh-list-view" );
	    },
	    error: function(err){
		PubSub.trigger('notify', "An error has ocured !Please try later.");
	    } 
	});	
    },
    
    saveGroup : function(json){

	var grp = new Group(json)
	if(!grp.isValid()){
	    PubSub.trigger('notify', grp.validationError);
	}
	
	grp.save({}, {
	    success : function(o){
		var msg = "Added successfully group " + o.get("name");
		PubSub.trigger('notify', msg);
		PubSub.trigger("refresh-list-view");
	    },
	    error: function(){
		PubSub.trigger('notify', "An error has ocured !Please try later.");
	    } 
	});
    },
    
    notify : function(msg){

	var err = msg.match(/error/gi),
	    type = "info";

	if(err != null){
	    type = "danger"
	}
	$.notify({
	    // options
	    icon: 'glyphicon glyphicon-warning-sign',
	    message: msg,
	    target: '_blank'
	},{
	    // setting
	    element: 'body',
	    position: null,
	    type: type,
	    allow_dismiss: true,
	    newest_on_top: false,
	    showProgressbar: false,
	    placement: {
		from: "top",
		align: "right"
	    },
	    offset: 20,
	    spacing: 10,
	    z_index: 1031,
	    delay: 3500,
	    timer: 1000,
	    url_target: '_blank',
	    mouse_over: null,
	    animate: {
		enter: 'animated fadeInDown',
		exit: 'animated fadeOutUp'
	    }
	});
    }
    

});


new Router();











