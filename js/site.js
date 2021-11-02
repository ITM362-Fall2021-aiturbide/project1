document.getElementById("input").onclick = function() {
  let allAreFilled = true;
  document.getElementById("myForm").querySelectorAll("[required]").forEach(function(i) {
    if (!allAreFilled) return;
    if (!i.value) allAreFilled = false;
  })
  if (!allAreFilled) {
    alert('Please fill out all the fields');
  }
};
