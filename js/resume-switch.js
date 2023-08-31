function myCvResumeSwitchFunction() {
  var cv = document.getElementById("myCV");
  var resume = document.getElementById("myResume");
  if (cv.style.display === "none") {
    cv.style.display = "block";
    resume.style.display = "none";
  } else {
    cv.style.display = "none";
    resume.style.display = "block";
  }
}