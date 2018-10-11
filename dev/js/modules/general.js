const handleShowElement = (text_id_elem)=>{
	console.log(text_id_elem);

	text_id_elem= document.getElementById(text_id_elem);
	text_id_elem.classList.toggle('active');


}

export{
	handleShowElement
}
