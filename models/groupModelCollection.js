(function(context, _, $){
        
    context.GroupsCollection = Backbone.Collection.extend({
	url : FIREBASE_CONFIG + '/groups.json',
	model: Group,
		
	parse: function(response){
	    var items = [];
	    
	    for (var o in response){
		items.push(response[o]);
	    }
	    
	    return items;
	}
	
	
    });
    
})(window, _, jQuery);
