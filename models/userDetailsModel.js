(function(context, _, $){
        
    context.UserDetailsModel = Backbone.Model.extend({
	defaults : function(){
	    return {
		id : null,
		name : null,
		email : null,
		city : null,
		job : null,
		married : null
		
	    }
	}
		
    });


})(window, _, jQuery);
