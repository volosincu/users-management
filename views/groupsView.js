(function(context, _, $){
    var template, html;

    context.GroupsView = Backbone.View.extend({
	
	initialize : function(){
	    
	},
	
	render : function (){
	    
	    var self = this;
	    this.$el.html("");
	    self.model.each(function(group){
		var g = new GroupView({model:group});
		self.$el.append(g.render().$el);	
	    })
	    
	}
    });


})(window, _, jQuery);
