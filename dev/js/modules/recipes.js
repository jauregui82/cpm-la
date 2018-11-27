var categoryRecipeActive = 1;

if (window.location.hash == '#1') {
  categoryRecipeActive = 1;
}
else if (window.location.hash == '#2') {
  categoryRecipeActive = 2;
}
else if (window.location.hash == '#3') {
  categoryRecipeActive = 3;
}

var listRecipes = document.querySelectorAll('.item-recipe');
var container_recipes = document.getElementById('container-recipes');

var listRecipesArray= [];

Array.prototype.forEach.call(listRecipes, (el, i)=>{
  var nuevo= el.cloneNode(true);
  listRecipesArray.push(nuevo);
});

console.log(listRecipes);

const handleLoadRecipes = (current_page = 1)=>{

	if(container_recipes != null){

		let container_pagination= document.querySelector('#pagination-recipes');

		let elems= listRecipesArray;
		let items= elems;

		let data_filter = items.filter((item) => item.dataset.category == categoryRecipeActive);

		let total_data= data_filter.length;
		let max_page= 6;
		let total_pages= Math.ceil(total_data / max_page);
		// let limit_pag= 4;


		let data_news= data_filter.slice((current_page - 1) * max_page, current_page * max_page);
		container_recipes.innerHTML= '';


    Array.prototype.forEach.call(data_news, (el, i)=>{
      var nuevo= el.cloneNode(true);
      container_recipes.appendChild(nuevo);
    });

		container_pagination.innerHTML='';

		if(current_page <= total_pages){

			if(current_page == 1){
				if(total_pages == 1){

					container_pagination.innerHTML +=`
						<span>Página</span>
						<span class="number active">${ current_page }</span>
						<span>de</span>
						<a href='javascript:void(0);' onclick='handleLoadRecipes(${ total_pages })'><span class="number">${ total_pages }</span></a>
					`;
				}
				else{
					container_pagination.innerHTML +=`
						<span>Página</span>
						<span class="number active">${ current_page }</span>
						<span>de</span>
						<a href='javascript:void(0);' onclick='handleLoadRecipes(${ total_pages })'><span class="number">${ total_pages }</span></a>
						<a href='javascript:void(0);' onclick='handleLoadRecipes(${ current_page + 1 })' class="page-button page-next" href="#"></a>
					`;
				}
			}

			else if(current_page == total_pages){
				container_pagination.innerHTML +=`
					<a href='javascript:void(0);' onclick='handleLoadRecipes(${ current_page - 1 })' class="page-button page-prev" href="#"></a>
					<span>Página</span>
					<span class="number active">${ current_page }</span>
					<span>de</span>
					<span class="number">${ total_pages }</span>
				`;
			}
			else{
				container_pagination.innerHTML +=`
					<a href='javascript:void(0);' onclick='handleLoadRecipes(${ current_page - 1 })' class="page-button page-prev" href="#"></a>
					<span>Página</span>
					<span class="number active">${ current_page }</span>
					<span>de</span>
					<a href='javascript:void(0);' onclick='handleLoadRecipes(${ total_pages })'><span class="number">${ total_pages }</span></a>
					<a href='javascript:void(0);' onclick='handleLoadRecipes(${ current_page + 1 })' class="page-button page-next" href="#"></a>
				`;
			}
		}

	}
}

const handleNavCategoriesRecipes = () => {
  let nav_categories = document.querySelector('#nav-categories');

  if (nav_categories != null) {
    nav_categories.addEventListener('click', (e) => {
      // console.log(e.target);
      let elem = e.target;
      if (elem.classList.contains('item-nav')) {
        let data_id = elem.dataset.category;

        let list_item = Array.prototype.slice.apply(document.querySelectorAll('.item-nav'));
        list_item.map((item) => item.classList.remove('active'));

        elem.classList.add('active');

        categoryRecipeActive = data_id;
        handleLoadRecipes();
        window.location.hash = categoryRecipeActive;
      }
    });
  }
}

export{
	handleLoadRecipes,
	handleNavCategoriesRecipes
}
