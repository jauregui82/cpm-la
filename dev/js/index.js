// modules
import { handleShowElement } from "./modules/general";
import toggleMenu from "./modules/menu";
import { sliderWrapper, sliderMultipleItems } from "./modules/slick";

import {
	handleItemArticle as handleItemArticleProducts,
	handleItemMenuMap as handleItemMenuMapProducts
} from "./modules/products";

import { handleItemsMenu as handleItemsMenuTerms } from "./modules/terms-and-conditions";

// handleShowNextSibling();
// handleShowElement;

window.handleShowElement= handleShowElement;
window.toggleMenu= toggleMenu;
window.sliderWrapper= sliderWrapper;
window.sliderMultipleItems= sliderMultipleItems;

window.handleItemArticleProducts= handleItemArticleProducts;
window.handleItemMenuMapProducts= handleItemMenuMapProducts;
window.handleItemsMenuTerms= handleItemsMenuTerms;

// console.log('123456');
