
	$(function(){

	//hand click or paragraph text click to show quiz
	$("img.hand, header p").click(function(){
        $("div.questionContainer").addClass("questionContainerShow");
        $('html, body').animate({
            scrollTop: $("#questionContainer").offset().top}, 2000);
    });

	//Costume Score Calculation
	var zombie = 0;
	var pizzaRat = 0;
	var royalty = 0;
	var nurse = 0;
	var tmnt = 0;
	var ghost = 0;

	var calculate = function(){
		if (score === 10) {
			zombie += 1;
		} else if (score === 20) {
			pizzaRat += 1;
		} else if (score === 30) {
			royalty += 1;
		} else if (score === 40) {
			ghost += 30;
		} else if (score === 50) {
			tmnt += 50;
		} else if (score === 60) {
			nurse += 15;
		}
	};
//SCORING
	$('.q1').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		$("div.craftQ").addClass("show");
		$('html, body').animate({
            scrollTop: $("#craftQuestion").offset().top}, 2000);
	});

	$('.q2').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		$("div.sexyQ").addClass("show");
		$('html, body').animate({
            scrollTop: $("#sexyQuestion").offset().top}, 2000);
	});

	$('.q3').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		$("div.spookyQ").addClass("show");
		$('html, body').animate({
            scrollTop: $("#spookyQuestion").offset().top}, 2000);
	});

	$('.q4').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		$("div.movieQ").addClass("show");
		$('html, body').animate({
            scrollTop: $("#movieQuestion").offset().top}, 2000);
	});

	$('.q5').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		$("div.partyQ").addClass("show");
		$('html, body').animate({
            scrollTop: $("#partyQuestion").offset().top}, 2000);
	});

	$('.q6').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		$("div.groupQ").addClass("show");
		$('html, body').animate({
            scrollTop: $("#groupQuestion").offset().top}, 2000);
	});

	$('.q7').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();

//ANSWER GENERATION & SCROLL TO ANSWER
	if (zombie > pizzaRat && zombie > royalty && zombie > nurse && zombie > tmnt && zombie > ghost) {
		$('#zombie').addClass('qShow');
		$('html, body').animate({
        scrollTop: $("#zombie").offset().top}, 2000);
        $('#foot').addClass('showF');
	} 
	
	else if (pizzaRat > zombie && pizzaRat > royalty && pizzaRat > nurse && pizzaRat > tmnt && pizzaRat > ghost) {
		$('#pizzaRat').addClass('qShow');
		$('html, body').animate({
        scrollTop: $("#pizzaRat").offset().top}, 2000);
        $('#foot').addClass('showF');
	} 
	else if (royalty > zombie && royalty > pizzaRat && royalty > nurse && royalty > tmnt && royalty > ghost) {
		$('#royalty').addClass('qShow');
		$('html, body').animate({
        scrollTop: $("#royalty").offset().top}, 2000);
        $('#foot').addClass('showF');
	} 
	else if (nurse > zombie && nurse > pizzaRat && nurse > tmnt && nurse > ghost && nurse > royalty) {
		$('#nurse').addClass('qShow');
		$('html, body').animate({
        scrollTop: $("#nurse").offset().top}, 2000);
        $('#foot').addClass('showF');
	} 
	else if (tmnt > zombie && tmnt > pizzaRat && tmnt > nurse && tmnt > ghost && tmnt > royalty) {
		$('#tmnt').addClass('qShow');
		$('html, body').animate({
        scrollTop: $("#tmnt").offset().top}, 2000);
        $('#foot').addClass('showF');
	} 
	else if (ghost > zombie && ghost > pizzaRat && ghost > royalty && ghost > tmnt && ghost > nurse) {
		$('#ghost').addClass('qShow');
		$('html, body').animate({
        scrollTop: $("#ghost").offset().top}, 2000);
        $('#foot').addClass('showF');
	} 	
});

}); //function
