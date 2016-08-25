
(function(context, _, $){
        
    context.Group = Backbone.Model.extend({
    
	url : function (){
	    return 'https://bbscript-5db8e.firebaseio.com/groups/' + this.get("id") + ".json"
	},
	defaults : function (){
	    return {
		id : null,
		name : null,
		users : ""
	    }
	},
	validate : function(props){
	    if(!props.name || (props.name && props.name.length > 15)){
		return "Error: Group name is a required field. Between 0 and 10 chars."
	    }
	},
	
	initialize : function(){
	    
	    this.on("change", function(){
		console.log("Change/Save in Group model with id " + this.get("id"));
	    }, this);
	}
    });
    
    


})(window, _, jQuery);
