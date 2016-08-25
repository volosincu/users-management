
(function(context, _, $){
        
    context.WidgetCreatorService = (function () {



	var createGroupList = function (self, el){

	    new GroupsCollection().fetch({
		success : function(lst){
		    self.groupsListView = new GroupsView({el : el, model : lst});
		    self.groupsListView.render();
		    self.groupsListView.delegateEvents();
		},
		error: function(){
		    PubSub.trigger('notify', "An error has ocured !Please try later.");
		} 
	    });
	    
	    
	};
	
	var createUserList = function (self, el){

	   new UsersCollection().fetch({
	       success : function(lst){
		   self.usersListView = new UsersView({el : el, model : lst});
		   self.usersListView.render();
		   self.usersListView.delegateEvents();
	       },
	       error: function(){
		   PubSub.trigger('notify', "An error has ocured !Please try later.");
	       } 
	   });
	    
	    
	};

	
	return {
	    createUserList : createUserList,
	    createGroupList : createGroupList

	    
	} 
    })();



    


})(window, _, jQuery);
