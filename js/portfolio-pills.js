var list11 = document.getElementById("pills-ul-xs");
var items11 = list11.getElementsByClassName("nav-link");
var count11 = items11.length;
// alert("Count of Items11 is " + (count1));
var list12 = document.getElementById("pills-ul-sm");
var items12 = list12.getElementsByClassName("nav-link");
var count12 = items12.length;
// alert("Count of Items12  is " + (count2));
var list13 = document.getElementById("pills-ul-md");
var items13 = list13.getElementsByClassName("nav-link");
var count13 = items13.length;
// alert("Count of Items13  is " + (count3));
// added for mobile
var list14 = document.getElementById("pills-ul-xl");
var items14 = list14.getElementsByClassName("nav-link");
var count14 = items14.length;
// alert("Count of Items14  is" + " " + (count4));
var list15 = document.getElementById("pills-tabContent");
var items15 = list15.getElementsByClassName("tab-pane");
var count15 = items15.length;
// alert("Count of Items15  is" + " " + (count5));

//addEventListener for #pills-ul-xs children
for (var i = 0; i < count11; i++) {
	items11[i].addEventListener("click", function () {
		//var current = document.getElementsByClassName("active");
		//  current[0].className = current[0].className.replace(" active", "");
		//  this.className += " active";
		var index = this.getAttribute('data-index');
		// remove active from items11 list items
		for (j = 0; j < count11; j++) {
			var element = items11[j];
			// alert("element is "  + element.getElementsByClassName("active") + " j is " + j)
			// alert($(element).hasClass("active"));
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items12 list items
		for (k = 0; k < count12; k++) {
			var element = items12[k];
			//  alert("element is "  + element.getElementsByClassName("active") + " k is " + k)
			// alert($(element).hasClass("active"));
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items13 list items
		for (m = 0; m < count13; m++) {
			var element = items13[m];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items14 list items
		for (n = 0; n < count14; n++) {
			var element = items14[n];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active show from items15 list items
		for (p = 0; p < count15; p++) {
			var element = items15[p];
			if (element.getElementsByClassName("active show")) {
				element.className = element.className.replace(" active show", "");
			}
		}
		items11[index].className += " active";
		items12[index].className += " active";
		items13[index].className += " active";
		items14[index].className += " active";
		items15[index].className += " active show";
	});
}

//addEventListener for #pills-ul-sm children
for (var i = 0; i < count12; i++) {
	items12[i].addEventListener("click", function () {
		var index = this.getAttribute('data-index');
		// remove active from items11 list items
		for (j = 0; j < count11; j++) {
			var element = items11[j];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items12 list items
		for (k = 0; k < count12; k++) {
			var element = items12[k];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items13 list items
		for (m = 0; m < count13; m++) {
			var element = items13[m];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items14 list items
		for (n = 0; n < count14; n++) {
			var element = items14[n];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active show from items15 list items
		for (p = 0; p < count15; p++) {
			var element = items15[p];
			if (element.getElementsByClassName("active show")) {
				element.className = element.className.replace(" active show", "");
			}
		}
		items11[index].className += " active";
		items12[index].className += " active";
		items13[index].className += " active";
		items14[index].className += " active";
		items15[index].className += " active show";
	});
}

//addEventListener for #pills-ul-md children
for (var i = 0; i < count13; i++) {
	items13[i].addEventListener("click", function () {
		var index = this.getAttribute('data-index');
		// remove active from items11 list items
		for (j = 0; j < count11; j++) {
			var element = items11[j];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items12 list items
		for (k = 0; k < count12; k++) {
			var element = items12[k];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items13 list items
		for (m = 0; m < count13; m++) {
			var element = items13[m];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items14 list items
		for (n = 0; n < count14; n++) {
			var element = items14[n];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active show from items15 list items
		for (p = 0; p < count15; p++) {
			var element = items15[p];
			if (element.getElementsByClassName("active show")) {
				element.className = element.className.replace(" active show", "");
			}
		}
		items11[index].className += " active";
		items12[index].className += " active";
		items13[index].className += " active";
		items14[index].className += " active";
		items15[index].className += " active show";
	});
}

//addEventListener for #pills-ul-xl children
for (var i = 0; i < count14; i++) {
	items14[i].addEventListener("click", function () {
		var index = this.getAttribute('data-index');
		// remove active from items11 list items
		for (j = 0; j < count11; j++) {
			var element = items11[j];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items12 list items
		for (k = 0; k < count12; k++) {
			var element = items12[k];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items13 list items
		for (m = 0; m < count13; m++) {
			var element = items13[m];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active from items14 list items
		for (n = 0; n < count14; n++) {
			var element = items14[n];
			if (element.getElementsByClassName("active")) {
				element.className = element.className.replace(" active", "");
			}
		}
		// remove active show from items15 list items
		for (p = 0; p < count15; p++) {
			var element = items15[p];
			if (element.getElementsByClassName("active show")) {
				element.className = element.className.replace(" active show", "");
			}
		}
		items11[index].className += " active";
		items12[index].className += " active";
		items13[index].className += " active";
		items14[index].className += " active";
		items15[index].className += " active show";
	});
}