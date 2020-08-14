

$(function() {
$(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
    } else {
        $(".item").addClass("active");
    }
});
});
/*
calculator js
*/
var person = {
  name: "Leo", age:35
}
person = JSON.stringify(person);
person = JSON.parse(person);
console.log(person);

  email: (function(){
    return 'l.blas.aramburu@gmail.com'
  })();

  /* Calculadora de carbos netos*/
(function () {
	function Carbos_netos(carbs, fibra) {

		carbs = parseFloat(carbs);
		fibra = parseFloat(fibra);
		return (carbs - fibra);
	}

	var calculatecarbs = document.getElementById("calculatecarbs");
	if (calculatecarbs) {
		calculatecarbs.onsubmit = function () {
			this.resultado.value = Carbos_netos(this.carbs.value, this.fibra.value);
			return false;
		};
	}
}());
