
/**
 *  catch firebase authentication event
 *  and init page accordingly
 */

(function (ctx){

    ctx.firebase.auth().onAuthStateChanged(function(user) {
	var header, headerView, tabs, tabsView;
	
	if (user) {
            // User is signed in.
	    
	    header = new ctx.HeaderModel({
		logged : "show",
		loggedout : "hide",
		displayName: user.displayName,
		email : user.email
	    });
	    
	} else {
	    header = new ctx.HeaderModel({
		logged : "hide",
		loggedout : "show"
	    });
	    
	}
	
	headerView = new ctx.HeaderView({el: '#header', model : header});
	headerView.render();
	
	tabs = new ctx.TabsModel();
	tabsView = new ctx.TabsView({el : '#main-section', model : tabs});
	tabsView.render();
    });
    
})(window);
