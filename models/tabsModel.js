
(function(context){
        
    context.TabsModel = Backbone.Model.extend({
	defaults : function(){
	    return {
		view : true ,
		create : false,
		selectedGroup : null
	    }
	}
		
    });


})(window);
