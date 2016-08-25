
(function(context, _, $){
        
    context.UsersCollection = Backbone.Collection.extend({
	url : FIREBASE_CONFIG.databaseURL + '/users.json',
	model: User,
	
	parse: function(response){
	    var items = [];
	    
	    for (var o in response){
		items.push(response[o]);
	    }
	    
	    return items;
	}
	
	
    });
    
})(window, _, jQuery);
