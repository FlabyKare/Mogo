




const accordion_header = document.getElementById('header');

accordion_header.addEventListener("click", () => {
	$("#content").toggleClass('hide');
	$("#header").toggleClass('active');

})





const accordion_header1 = document.getElementById('header1');

accordion_header1.addEventListener("click", () => {
	$("#content1").toggleClass('hide1');
	$("#header1").toggleClass('active1');
})





const accordion_header2 = document.getElementById('header2');

accordion_header2.addEventListener("click", () => {
	$("#content2").toggleClass('hide2');
	$("#header2").toggleClass('active2');
})







