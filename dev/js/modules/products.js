const handleItemArticle = (e)=>{
	console.log('handle item article');
	let container_articles_products= document.getElementById("container-articles-products");

	container_articles_products.addEventListener("click", (e) => {
		e.preventDefault();
	  // console.log(e.target);
		let elem= e.target;
		if(elem.classList.contains('link-toggle')){
			// if(elem.classList.contains('link-toggle'))
			let id_toggle= elem.href;
			let text_id_elem= id_toggle.split("#")[1];
			let id_elem= document.getElementById(text_id_elem);

			let text_elem= text_id_elem.split("-")[0];
			let number_elem= text_id_elem.split("-")[1];
			// console.log(text_elem);

			text_elem= (text_elem =="graphicProduct" ? "tableProduct": "graphicProduct");
			let second_elem= document.getElementById(text_elem + "-" + number_elem);

			if(id_elem.classList.contains('active')){
				id_elem.classList.remove('active');
				second_elem.classList.remove('active');
				return;
			}

			id_elem.classList.add('active');

			second_elem.classList.remove('active');
			// console.log(second_elem);
		}
	});
}

const handleItemMenuMap=(e)=>{
	console.log('handle item menu map');
	let container_menu_map= document.getElementById("container-menu-map");

	container_menu_map.addEventListener("click", (e) => {
		e.preventDefault();
	  // console.log(e.target);

		let elem= e.target;
		if(elem.classList.contains('btn-theme')){
			let nav= elem.nextElementSibling;

			let list_menu_map= Array.prototype.slice.apply(document.querySelectorAll('.menu-country'));
			list_menu_map.map((item) => item.classList.remove('active'));

			// if(nav.classList.contains('active')){
			// 	nav.classList.remove('active');
			// 	return;
			// }

			nav.classList.toggle('active');
		}
	});
}

export{
	handleItemArticle,
	handleItemMenuMap
}
