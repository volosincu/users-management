
(function(context, _, $){
    var template, html;

    // util private function
    var extractJSON = function(formId){
	var o = {
	    id: (Math.random(100)*10).toString().split('.')[1],
	};
	
	var items = $(formId).find("input");
	$.each(items, function(i, it){
	    o[it.id] = it.value;
	});
	
	return o;
    }
    
    
    context.UserFormView = Backbone.View.extend({

	events: {
	    "click button#save-user" : "saveUser",
	    "click button#save-group" : "saveGroup"
	},
	render : function(){
	    template = _.template($("#user-form-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);

	    return this;
	},
	
	saveGroup : function(e){
	    var json = extractJSON("#group-block");
	    PubSub.trigger("save-group", json );
	    
	},

	saveUser : function(e){
	    var json = extractJSON("#user-block");
	    PubSub.trigger("save-user", json );
	    
	}

    });


})(window, _, jQuery);
