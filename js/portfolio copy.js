var list1 = document.getElementById("sidebar-ul-xs");
var items1 = list1.getElementsByClassName("menu-item");
var count1 = items1.length;
// alert("Count of Items1 is" + (count1));
var list2 = document.getElementById("sidebar-ul-mini");
var items2 = list2.getElementsByClassName("menu-item");
var count2 = items2.length;
// alert("Count of Items2  is" + (count2));
var list3 = document.getElementById("sidebar-ul-lg");
var items3 = list3.getElementsByClassName("menu-item");
var count3 = items3.length;

//addEventListener for #sidebar-ul-xs children
for (var i = 0; i < count1; i++) {
  items1[i].addEventListener("click", function() {
  //var current = document.getElementsByClassName("active");
  //  current[0].className = current[0].className.replace(" active", "");
  //  this.className += " active";
  var index = this.getAttribute('data-index');
  // remove active from items1 list items
  for (j=0; j < count1; j++) {
    var element = items1[j];
   // alert("element is "  + element.getElementsByClassName("active") + " j is " + j)
    // alert($(element).hasClass("active"));
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  // remove active from items2 list items
  for (k=0; k < count2; k++) {
    var element = items2[k];
  //  alert("element is "  + element.getElementsByClassName("active") + " k is " + k)
    // alert($(element).hasClass("active"));
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  // remove active from items3 list items
  for (m=0; m < count3; m++) {
    var element = items3[m];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  
  items1[index].className += " active";
  items2[index].className += " active";
  items3[index].className += " active";
  });
}

//addEventListener for #sidebar-ul-mini children
for (var i = 0; i < count2; i++) {
  items2[i].addEventListener("click", function() {
  var index = this.getAttribute('data-index');
    // remove active from items1 list items
  for (j=0; j < count1; j++) {
    var element = items1[j];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  // remove active from items2 list items
  for (k=0; k < count2; k++) {
    var element = items2[k];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  // remove active from items3 list items
  for (m=0; m < count3; m++) {
    var element = items3[m];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  items1[index].className += " active";
  items2[index].className += " active";
  items3[index].className += " active";
  });
}

//addEventListener for #sidebar-ul-lg children
for (var i = 0; i < count3; i++) {
  items3[i].addEventListener("click", function() {
  var index = this.getAttribute('data-index');
    // remove active from items1 list items
  for (j=0; j < count1; j++) {
    var element = items1[j];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  // remove active from items2 list items
  for (k=0; k < count2; k++) {
    var element = items2[k];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  // remove active from items3 list items
  for (m=0; m < count3; m++) {
    var element = items3[m];
      if (element.getElementsByClassName("active")) {
           element.className = element.className.replace(" active", "");
      }
   } 
  items1[index].className += " active";
  items2[index].className += " active";
  items3[index].className += " active";
  });
}
