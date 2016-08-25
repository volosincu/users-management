(function(context, _, $){
    var template, html;

    context.UsersView = Backbone.View.extend({
	
	initialize : function(){
	    var self = this;
	    
	    /*this.model.on("add", function (model, arr){
		var _u = new UserView({model: model});
		this.$el.append(_u.render().$el);
	    }, this);
*/
	    this.model.on("change", function(){
		console.log("change in Users View");
	    });

	    
	},
	
	render : function (){
	    
	    var self = this;
	    this.$el.html("");
	    self.model.each(function(user){
		var _u = new UserView({model:user});
		self.$el.append(_u.render().$el);	
	    })
	    
	}
    });


})(window, _, jQuery);
