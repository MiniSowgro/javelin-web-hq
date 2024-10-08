function openNav() {

	console.log("Opening Sidebar.")
	document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  

}

function closeNav() {

	console.log("Closing Sidebar.")
	document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
		
}

