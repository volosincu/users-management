
(function(context, _, $){
    var template, html;
    context.TabsView = Backbone.View.extend({

	userFormView : new UserFormView(),

	events: {
	    "click #tab-view" : "view",
	    "click #tab-create" : "create"
	},
	render : function(){
	    template = _.template($("#tabs-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);
	    
	    this.userFormView.$el = this.$('#create-forms');
	    this.userFormView.model = new User();;
	    this.userFormView.render();
	    this.userFormView.delegateEvents();
	    

	    
	    return this;
	},

	initialize : function(){
	    	},

	view : function(e){
	    $(e.currentTarget).addClass("active");
	    $(e.currentTarget).next().removeClass("active");
	},

	create : function(e){
	    $(e.currentTarget).addClass("active");
	    $(e.currentTarget).prev().removeClass("active");
	}


	
    });


})(window, _, jQuery);
