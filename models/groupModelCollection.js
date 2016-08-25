(function(context, _, $){
        
    context.GroupsCollection = Backbone.Collection.extend({
	url : 'https://bbscript-5db8e.firebaseio.com/groups.json',
	model: Group,
	
	initialize : function(){
	    this.on("change", function(){
		console.log("change in Groups Collection");
	    });
	    
	    this.on("add", function(){
		console.log("add in Groups Collection");
	    });
	},
	
	parse: function(response){
	    var items = [];
	    
	    for (var o in response){
		items.push(response[o]);
	    }
	    
	    return items;
	}
	
	
    });
    
})(window, _, jQuery);
