
(function(context, _, $){
        
    context.User = Backbone.Model.extend({
    
	url : function (){
	    return 'https://bbscript-5db8e.firebaseio.com/users/' + this.get("id") + ".json"
	},
	defaults : function (){
	    return {
		id : null,
		email : null,
		name : null,
		job : null,
		city : null,
		married : null
	    }
	},
	
	initialize : function(){
	    
	    this.on("change", function(){
		console.log("Change in User model with id" + this.get("id"));
	    }, this);
	}
    });
    
    


})(window, _, jQuery);
