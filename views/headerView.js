
(function(context, _, $){
    var template, html;
    context.HeaderView = Backbone.View.extend({


	events: {
	    "click button#sign-in" : "signIn",
	    "click button#sign-out" : "signOut"
	},
	render : function(){
	    template = _.template($("#header-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);

	    return this;
	},

	initialize : function(){
	  //
	},

	signIn : function(){
	    location = "/#login";
	},

	signOut : function(){
	    firebase.auth().signOut();
	    location = "/";
	}


	
    });


})(window, _, jQuery);
