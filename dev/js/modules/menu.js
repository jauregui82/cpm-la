export default function toggle_menu(){

	let d= document;
	let btn_menu= d.getElementById("toggle-menu"),
			menu= d.getElementById("menu");
			// off_canvas_layer= d.getElementById("off-canvas-layer");

	const toggle=()=>{
		btn_menu.classList.toggle("menu-close");
		menu.classList.toggle("show");
		d.body.classList.toggle("o-hidden-y");
		menu.classList.add("transition");

		setTimeout(()=>{
			menu.classList.remove("transition");
		}, 500);
	}

	btn_menu.addEventListener("click", ()=>{
		toggle();
	});

	$(window).on("load", function (){
		window.setTimeout(function() {
		  $(window).scrollTop(0);
		  window.scrollTo(0, 0);
		}, 0);
	});
}
