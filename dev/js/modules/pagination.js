
var listRecipes=null, listNews=null;
var categoryRecipeActive= 1;


const handlePagination= () =>{

	$(window).on('load', function () {
		// console.log('ook');
		listRecipes = document.querySelectorAll('.item-recipe');
		listNews = document.querySelectorAll('.item-new');
		// console.log(listRecipes);

	  handlePaginationRecipes();
	  handleNavCategoriesRecipes();
	  handlePaginationNews();
	});

}

// RECIPES
const handlePaginationRecipes = (current_page = 1) => {
	let container_recipes= document.querySelector('#container-recipes');

	if(container_recipes != null){
		// console.log('ook');
		let pagination_recipes= document.querySelector('#pagination-recipes');

		let elems= listRecipes;

		// console.log(elems);

		let items= Array.prototype.slice.apply(elems);
		let data_filter= items.filter((item)=> item.dataset.category == categoryRecipeActive);

		let total_data= data_filter.length;
		let max_page= 4;

		let total_pages= Math.ceil(total_data / max_page);

		let data_recipes= data_filter.slice((current_page - 1) * max_page, current_page * max_page);

		container_recipes.innerHTML= '';

		data_recipes.map(item =>{
			container_recipes.appendChild(item);
		});

		pagination_recipes.innerHTML= '';


		if(current_page <= total_pages){

			if(current_page == 1){
				if(total_pages == 1){

					pagination_recipes.innerHTML +=`
						<span>Página</span>
						<span class="number active">${ current_page }</span>
						<span>de</span>
						<a href='javascript:0' onclick='handlePaginationRecipes(${ total_pages })'><span class="number">${ total_pages }</span></a>
					`;
				}
				else{
					pagination_recipes.innerHTML +=`
						<span>Página</span>
						<span class="number active">${ current_page }</span>
						<span>de</span>
						<a href='javascript:0' onclick='handlePaginationRecipes(${ total_pages })'><span class="number">${ total_pages }</span></a>
						<a href='javascript:0' class='icon-right' onclick='handlePaginationRecipes(${ current_page + 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-right.png" alt=""></a>
					`;
				}
			}

			else if(current_page == total_pages){
				pagination_recipes.innerHTML +=`
					<a href='javascript:0' class='icon-left' onclick='handlePaginationRecipes(${ current_page - 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-left.png" alt=""></a>
					<span>Página</span>
					<span class="number active">${ current_page }</span>
					<span>de</span>
					<span class="number">${ total_pages }</span>
				`;
			}

			else{
				pagination_recipes.innerHTML +=`
					<a href="javascript:0" class='icon-left' onclick='handlePaginationRecipes(${ current_page - 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-left.png" alt=""></a>
					<span>Página</span>
					<span class="number active">${ current_page }</span>
					<span>de</span>
					<a href='javascript:0' onclick='handlePaginationRecipes(${ total_pages })'><span class="number">${ total_pages }</span></a>
					<a href='javascript:0' class='icon-right' onclick='handlePaginationRecipes(${ current_page + 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-right.png" alt=""></a>
				`;
			}
		}
	}
}

const handleNavCategoriesRecipes = () => {
	let nav_categories= document.querySelector('#nav-categories');

	if(nav_categories != null){
		nav_categories.addEventListener('click', (e) => {
			// console.log(e.target);
			let elem= e.target;
		  if(elem.classList.contains('item-nav')){
		  	let data_id= elem.dataset.category;

				let list_item= Array.prototype.slice.apply(document.querySelectorAll('.item-nav'));
				list_item.map((item) => item.classList.remove('active'));

				elem.classList.add('active');

				categoryRecipeActive= data_id;
		  	handlePaginationRecipes();
		  }
		});
	}
}


// BLOG
const handlePaginationNews = (current_page = 1) =>{

	let container_news= document.querySelector('#container-news');

	if(container_news != null){
		let container_pagination= document.querySelector('#pagination-news');

		let elems= listNews;

		let items= Array.prototype.slice.apply(elems);

		let total_data= items.length;
		let max_page= 5;
		let total_pages= Math.ceil(total_data / max_page);

		// console.log(total_pages);

		let data_news= items.slice((current_page - 1) * max_page, current_page * max_page);

		container_news.innerHTML= '';

		let html =``;

		data_news.map(item => {
			container_news.appendChild(item);
		});

		container_pagination.innerHTML='';

		if(current_page <= total_pages){

			if(current_page == 1){
				if(total_pages == 1){

					container_pagination.innerHTML +=`
						<span>Página</span>
						<span class="number active">${ current_page }</span>
						<span>de</span>
						<a href='javascript:0' onclick='handlePaginationNews(${ total_pages })'><span class="number">${ total_pages }</span></a>
					`;
				}
				else{
					container_pagination.innerHTML +=`
						<span>Página</span>
						<span class="number active">${ current_page }</span>
						<span>de</span>
						<a href='javascript:0' onclick='handlePaginationNews(${ total_pages })'><span class="number">${ total_pages }</span></a>
						<a href='javascript:0' class='icon-right' onclick='handlePaginationNews(${ current_page + 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-right.png" alt=""></a>
					`;
				}
			}

			else if(current_page == total_pages){
				container_pagination.innerHTML +=`
					<a href='javascript:0' class='icon-left' onclick='handlePaginationNews(${ current_page - 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-left.png" alt=""></a>
					<span>Página</span>
					<span class="number active">${ current_page }</span>
					<span>de</span>
					<span class="number">${ total_pages }</span>
				`;
			}

			else{
				container_pagination.innerHTML +=`
					<a href="javascript:0" class='icon-left' onclick='handlePaginationNews(${ current_page - 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-left.png" alt=""></a>
					<span>Página</span>
					<span class="number active">${ current_page }</span>
					<span>de</span>
					<a href='javascript:0' onclick='handlePaginationNews(${ total_pages })'><span class="number">${ total_pages }</span></a>
					<a href='javascript:0' class='icon-right' onclick='handlePaginationNews(${ current_page + 1 })'><img class="img-icon-tabs" src="./img/icon/arrow-right.png" alt=""></a>
				`;
			}
		}
	}
}


export {
  handlePagination,
  handlePaginationRecipes,
  handlePaginationNews
}
