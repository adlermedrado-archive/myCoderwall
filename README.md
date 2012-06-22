**Simple script to show my coderwall badges**

Made to be simple:

Include  scripts/my_coderwall.js at your HTML file:
	
	<script src="scripts/my_coderwall.js" type="text/javascript" charset="utf-8"></script>
	
Create a place to put your (section, div, whatever) badges:

	<section id="coderwall_badges"></section>
	
Create an instance of MyCoderWallBadges object passing the object's name and your coderwall's username:

	<script type="text/javascript" charset="utf-8">
	new myCoderwallBadges('coderwall_badges', 'adlermedrado');
	</script>
	
**jQuery is required**