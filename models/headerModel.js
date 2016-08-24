
(function(context, _, $){
        
    context.HeaderModel = Backbone.Model.extend({
	defaults : function(){
	    return {
		logged : "show",
		loggedout : "hide" ,
		displayName : null,
		email : null
	    }
	}
		
    });


})(window, _, jQuery);
