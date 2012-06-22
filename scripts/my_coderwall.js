function MyCoderwallBadges(objName, username) {
	this.objName = objName;
	this.username = username;
	var currentObject = this;
	
	getMyBadges = function(param) {
		for (i in param.data.badges) {
			var currentBadge = param.data.badges[i];
			$('#'+currentObject.objName).append(
			   $('<img>').attr('src',currentBadge.badge)
			   			 .attr('title',currentBadge.name+": "+currentBadge.description)
			   			 .attr('alt',currentBadge.name+": "+currentBadge.description)						 
			);
		}		
	}
	
	$.getScript("http://coderwall.com/"+this.username+".json?callback=this.getMyBadges");
}