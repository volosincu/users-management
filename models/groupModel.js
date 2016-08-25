
(function(context, _, $){
        
    context.Group = Backbone.Model.extend({
    
	url : function (){
	    return FIREBASE_CONFIG+'/groups/' + this.get("id") + ".json"
	},
	defaults : function (){
	    return {
		id : null,
		name : null,
		users : ""
	    }
	},
	validate : function(props){
	    var retst = /^[a-zA-Z\d\-_.,\s]+$/.test(props.name);
	    if(!props.name || (props.name && props.name.length > 10) || !retst){
		return "Error: Group name is required to be between 0 and 10 alphanumeric chars.."
	    }
	},
    });
    
    


})(window, _, jQuery);
