// var categoryRecipeActive = 1;

// if (window.location.hash == '#1') {
//   categoryRecipeActive = 1;
//   activeItemNav();
// }
// else if (window.location.hash == '#2') {
//   categoryRecipeActive = 2;
//   activeItemNav();
// }
// else if (window.location.hash == '#3') {
//   categoryRecipeActive = 3;
//   activeItemNav();
// }

var listRecipes = document.querySelectorAll('.item-recipe');
var container_recipes = document.getElementById('container-recipes');

let nav_categories = document.querySelector('#nav-categories');

var listRecipesArray= [];

Array.prototype.forEach.call(listRecipes, (el, i)=>{
  var nuevo= el.cloneNode(true);
  listRecipesArray.push(nuevo);
});

// console.log(listRecipes);

const handleLoadRecipes = (current_page = 1)=>{

  if(container_recipes != null){
    let pagination_recipes= document.querySelector('#pagination-recipes');

    let elems= listRecipesArray;
    let items= elems;

    let data_filter = items.filter((item) => item.dataset.category == categoryRecipeActive);

    let total_data= data_filter.length;
    let max_page= 5;
    let total_pages= Math.ceil(total_data / max_page);
    // let limit_pag= 4;


    let data_news= data_filter.slice((current_page - 1) * max_page, current_page * max_page);
    container_recipes.innerHTML= '';


    Array.prototype.forEach.call(data_news, (el, i)=>{
      var nuevo= el.cloneNode(true);
      container_recipes.appendChild(nuevo);
    });

    pagination_recipes.innerHTML='';

    if (current_page <= total_pages) {

      if (current_page == 1) {
        if (total_pages == 1) {

          pagination_recipes.innerHTML += `
            <span>Página</span>
            <span class="number active">${ current_page}</span>
            <span>de</span>
            <a href='javascript:void(0);' onclick='handleLoadRecipes(${ total_pages})'><span class="number">${total_pages}</span></a>
          `;
        }
        else {
          pagination_recipes.innerHTML += `
            <span>Página</span>
            <span class="number active">${ current_page}</span>
            <span>de</span>
            <a href='javascript:void(0);' onclick='handleLoadRecipes(${ total_pages})'><span class="number">${total_pages}</span></a>
            <a href='javascript:void(0);' class='icon-right' onclick='handleLoadRecipes(${ current_page + 1})'><img class="img-icon-tabs" src="./img/icon/arrow-right.png" alt=""></a>
          `;
        }
      }

      else if (current_page == total_pages) {
        pagination_recipes.innerHTML += `
          <a href='javascript:void(0);' class='icon-left' onclick='handleLoadRecipes(${ current_page - 1})'><img class="img-icon-tabs" src="./img/icon/arrow-left.png" alt=""></a>
          <span>Página</span>
          <span class="number active">${ current_page}</span>
          <span>de</span>
          <span class="number">${ total_pages}</span>
        `;
      }

      else {
        pagination_recipes.innerHTML += `
          <a href="javascript:void(0);" class='icon-left' onclick='handleLoadRecipes(${ current_page - 1})'><img class="img-icon-tabs" src="./img/icon/arrow-left.png" alt=""></a>
          <span>Página</span>
          <span class="number active">${ current_page}</span>
          <span>de</span>
          <a href='javascript:void(0);' onclick='handleLoadRecipes(${ total_pages})'><span class="number">${total_pages}</span></a>
          <a href='javascript:void(0);' class='icon-right' onclick='handleLoadRecipes(${ current_page + 1})'><img class="img-icon-tabs" src="./img/icon/arrow-right.png" alt=""></a>
        `;
      }
    }

    window.scrollTo(0, findPos(nav_categories));
  }
}

const findPos = (obj)=> {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

const activeItemNav = () =>{

  let list_item = Array.prototype.slice.apply(document.querySelectorAll('.item-nav'));
  list_item.map((item) => {
    item.classList.remove('active');
  });

  list_item.map((item) => {
    if(item.dataset.category== categoryRecipeActive){
      item.classList.add('active');
    }
  });

}

const handleNavCategoriesRecipes = () => {
  // let nav_categories = document.querySelector('#nav-categories');
  // console.log(nav_categories.scrollIntoView());

  if (nav_categories != null) {
    nav_categories.addEventListener('click', (e) => {
      // findPos(nav_categories);
      // console.log(findPos(nav_categories));
      // console.log(nav_categories.scrollIntoView());
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
        window.scrollTo(0, findPos(nav_categories));
      }
    });
  }
}

export{
  activeItemNav,
  handleLoadRecipes,
  handleNavCategoriesRecipes
}
