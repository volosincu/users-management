
(function(context, _, $){
    var template, html;

    var updateTabsView = function(self){
	WidgetCreatorService.createGroupList(self, "#group-list");
	WidgetCreatorService.createUserList(self, "#user-list");
    }
    
    context.TabsView = Backbone.View.extend({

	userFormView : null,
	usersListView : null,
	groupsListView : null,

	
	events: {
	    "click #tab-view" : "view",
	    "click #tab-create" : "create"
	},
	
	initialize : function(){
	    var self = this;
	    PubSub.on('select-group', this.selectGroup, this);
	    PubSub.on('send-selected-group', this.sendSelectedGroup, this);
	    PubSub.on('refresh-list-view', function(){
		updateTabsView(self);
	    });
	},
	
	render : function(){
	    template = _.template($("#tabs-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);

	    updateTabsView(this);

	    this.userFormView = new UserFormView({el: '#create-forms', model : new User()});
	    this.userFormView.render();
	    this.userFormView.delegateEvents();
	    return this;
	},

	
	selectGroup : function(args){
	    $("#selected-group").val(args[0]);
	    $("#selected-group-id").val(args[1]);
	   
	},

	/* Send the selected group when is needed at join or leave.
	 * Event will be publish when other components will 
	 * trigger the event 
	 */ 
	sendSelectedGroup : function () {
	    return {
		id: $("#selected-group-id").val(),
		name : $("#selected-group").val()
	    }
	},


	view : function(e){
	    $(e.currentTarget).addClass("active");
	    $(e.currentTarget).next().removeClass("active");
	    $("#block-view").addClass("show");
	    $("#block-create").removeClass("show");
	},

	create : function(e){
	    $(e.currentTarget).addClass("active");
	    $(e.currentTarget).prev().removeClass("active");
	    $("#block-view").removeClass("show");
	    $("#block-create").addClass("show");
	    
	}

    });


})(window, _, jQuery);
