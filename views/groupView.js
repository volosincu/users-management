
(function(context, _, $){
    var template, html;
    
    context.GroupView = Backbone.View.extend({
	
	tagName : 'a',
	className: 'list-group-item',
	events: {
	    "click #delete" : "delete",
	    "click #show-users" : "showUsers",
	    "click .group-name span" : "selectGroup"
	},
	attributes: function(){
	    return {
		type: 'button',
		href : '#'
	    }
	},
	render : function(){
	    template = _.template($("#group-tmpl").html());
	    html = template(this.model.toJSON());
	    this.$el.html(html);

	    return this;
	},

	delete : function(e){
	    
	    var users = this.model.get("users").split(",");
	    if(users.length === 0 || (users.length === 1 && users[0] === "")){
		
		new User({id: this.model.get("id")}).destroy({
		    success : function(u){
			console.log("deeelllllllllllxs00", u);
		    }
		});
			
	    }
	},
	
	selectGroup : function(e){
	    PubSub.trigger('select-group', [this.model.get("name"), this.model.id]);
	},

	showUsers : function(e){
	    $("#membership").html("");
	    var members = new UsersCollection();
	    
	    var users = this.model.get("users").split(",");
	    users.forEach(function(item, i){
		if(item !== ""){
		    new User({id: item}).fetch({
			success : function(u){
			    members.add(u);

			    if(i === (users.length-1)){
				self.usersListView = new UsersView({el : '#membership', model : members});
				self.usersListView.render();
			    }
			}
		    });
		}
	    });
	    
	}
	
	
    });



})(window, _, jQuery);
