const handleItemsMenu = (e)=>{

	let content_items_menu= document.getElementById('terms-and-conditions__items');

	content_items_menu.addEventListener('click', (e)=>{
		let elem= e.target;
		if(elem.classList.contains('terms-and-conditions__item')){
			elem.classList.toggle('active');
		}

		else if(elem.classList.contains('terms-and-conditions__item__title')){
			let item = elem.parentNode;
			item.classList.toggle('active');
		}

	});
}

export{
	handleItemsMenu
}
