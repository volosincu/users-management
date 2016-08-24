
(function(context, _, $){
    var template, html;
    context.UserFormView = Backbone.View.extend({

	events: {
	    "click button#save" : "save"
	},
	render : function(){
	    template = _.template($("#user-form-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);

	    return this;
	},

	save : function(){
	    
	}



	
    });


})(window, _, jQuery);
