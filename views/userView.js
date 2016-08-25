
(function(context, _, $){
    var template, html;

    var updateUsersFromGroup = function(o, nuser, add){
	var hasUser = o.get("users").indexOf(nuser.get("id")) ;
	if (add){
	    
	    if(hasUser < 0) {
		o.save({users : (o.get("users") + ","+ nuser.get("id")) }, {
		    success: function(){
			var msg = "Added user: " + nuser.get("email") + " to group " + o.get("name");
			PubSub.trigger("refresh-group-list" );
			PubSub.trigger('notify', msg);
		    },
		    error: function(){
			PubSub.trigger('notify', "An error has ocured !Please try later.");
		    } 
		});
	    }
	}else {

	    if(hasUser > 0) {
		var users = o.get("users").split(",");
		users.splice(hasUser, 1);
		o.save({users : users.join(",")}, {
		    success: function(){
			var msg = "Removed user: " + nuser.get("email") + " from group " + o.get("name");
			PubSub.trigger("refresh-group-list" );
			PubSub.trigger('notify', msg);
		    },
		    error: function(){
			PubSub.trigger('notify', "An error has ocured !Please try later.");
		    } 
		});
	    }
	}
    };

    
    
    context.UserView = Backbone.View.extend({
	
	tagName : 'a',
	className: 'list-group-item',
	events: {
	    "click button#leave" : "leaveGroup",
	    "click button#join" : "joinGroup",
	    "click button#show-groups" : "showGroups"
	},
	attributes: function(){
	    return {
		type: 'button',
		href: '#'
	    }
	},
	render : function(){
	    template = _.template($("#user-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);

	    return this;
	},
	
	leaveGroup : function(){

	    var gr = PubSub.trigger('send-selected-group');

	    var exists = this.model.get("groups").indexOf(gr.id) ; 
	    if(exists > 0) {
		var groups = this.model.get("groups").split(",");
		groups.splice(groups.indexOf(gr.id), 1);		

		this.model.save({groups : groups.join(",")}, {
		    success: function (nuser) {
			new Group(gr)
			    .fetch({
				success: function(o){
				    var msgu = "Removed group: " + o.get("name") + " from user " + nuser.get("email");
				    PubSub.trigger('notify', msgu);
				    updateUsersFromGroup(o, nuser, false);
				},
				error: function(){
				    PubSub.trigger('notify', "An error has ocured !Please try later.");
				} 
			    });
		    },
		    error: function(){
			PubSub.trigger('notify', "An error has ocured !Please try later.");
		    } 
		});
	    }
	    
	},

	joinGroup : function($e){

	    var gr = PubSub.trigger('send-selected-group');
	    
	    var exists = this.model.get("groups").indexOf(gr.id) ; 
	    if(exists < 0) {
		this.model.set("groups", this.model.get("groups") + "," + gr.id);
	    
		this.model.save({}, {
		    success: function (nuser) {
						
			new Group(gr)
			    .fetch({
				success: function(o){
				    var msgu = "Added group: " + o.get("name") + " to user " + nuser.get("email");
				    PubSub.trigger('notify', msgu);
				    updateUsersFromGroup(o, nuser, true);
				}
			    });
		    },
		    error: function(){
			PubSub.trigger('notify', "An error has ocured !Please try later.");
		    } 
		});
		
	    }
	},

	showGroups : function(){
	    $("#membership").html("");
	    var in_groups = new GroupsCollection();

	    var groups = this.model.get("groups").split(",");

	    groups.forEach(function(item, i){
		if(item !== ""){
		    new Group({id: item}).fetch({
			success : function(o){
			    in_groups.add(o);

			    if(i === (groups.length-1)){
				self.groupsListView = new GroupsView({el : "#membership", model : in_groups});
				self.groupsListView.render();
			    }
			}
		    });
		}
	    });
	    
	}

	

	
    });



})(window, _, jQuery);
